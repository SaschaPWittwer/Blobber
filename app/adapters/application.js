import DS from 'ember-data';
import { inject as service } from "@ember/service";
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
    host: "https://blobber.azurewebsites.net/api/",

    session: service('session'),
    headers: computed('session.isAuthorized', function() {
      return {
        'Authorization': 'Bearer ' + this.get('session.token')
      };
    })
});
