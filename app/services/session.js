import Service from '@ember/service';
import { computed } from '@ember/object';
import { inject as service } from "@ember/service";
import { storageFor } from 'ember-local-storage';
import $ from 'jquery';

export default Service.extend({
  username: null,
  user_id: null,
  isAuthorized: computed("token", function() {
    let token = this.get("token");
    return token !== null && token !== undefined;
  }),
  token: null,
  sessionInfo: storageFor('session-info'),
  i18n: service(),
  moment: service(),

  init() {
    this._super(...arguments);
    // Retriev session information from local storage
    this.set("token", this.get("sessionInfo.token"));
    this.set("username", this.get("sessionInfo.username"));
    this.set("user_id", this.get("sessionInfo.user_id"));
    let lang = this.get("sessionInfo.lang");
    if (lang) {
      this.set('i18n.locale', lang);
      this.get('moment').setLocale(lang);
    }

    // For observing reasons
    this.get("isAuthorized");
    this.get("token");
    this.get("username");
    this.get("user_id");
    
  },
  login(username, password, success, fail) {
    let self = this;

    $.post(
      "https://blobber.azurewebsites.net/api/token",
      {
        user: username,
        password: password
      },
      payload => {
        self.set("token", payload.token);
        self.set("username", payload.username);
        self.set("user_id", payload.id);

        // Add token to local storage for better session management
        self.set("sessionInfo.token", payload.token);
        self.set("sessionInfo.username", payload.username);
        self.set("sessionInfo.user_id", payload.id);

        success();
      }
    ).fail(reason => {
      fail(reason);
    });
  },
  logout() {
    this.set("token", null);
    this.set("sessionInfo.token", null);
    this.set("sessionInfo.username", null);
    this.set("sessionInfo.user_id", null);
  }
});
