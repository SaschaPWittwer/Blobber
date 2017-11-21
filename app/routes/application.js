import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),
    isAuthorized: Ember.computed("session.authorized", function() {
        return this.get("session").get("authorized");
    }),
    
    model() {
        // return this.get("store").findAll("blogpost");
    }
});
