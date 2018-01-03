import Ember from "ember";

export default Ember.Service.extend({
  username: null,
  user_id: null,
  isAuthorized: Ember.computed("token", function() {
    return this.get("token") !== null && this.get("token").length > 0;
  }),
  token: null,

  init() {
    this._super(...arguments);
    // For observing reasons
    this.get("isAuthorized");
    this.get("token");
    this.get("username");
    this.get("user_id");
  },
  login(username, password, success, fail) {
    let self = this;

    Ember.$.post(
      "https://blobber.azurewebsites.net/api/token",
      {
        user: username,
        password: password
      },
      payload => {
        self.set("token", payload.token);
        self.set("username", payload.username);
        self.set("user_id", payload.id);
        success();
      }
    ).fail(() => {
      fail();
    });
  },
  logout() {
    this.set("token", null);
  }
});
