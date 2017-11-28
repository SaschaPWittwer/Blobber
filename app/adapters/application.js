import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
    host: "https://blobber.azurewebsites.net/api/",

    session: Ember.inject.service('session'),
    headers: Ember.computed('session.isAuthorized', function() {
      return {
        'Authorization': 'Bearer ' + this.get('session.token')
      };
    })
});
