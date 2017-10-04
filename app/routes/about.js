import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        if (!this.get("auth").get("isAuthenticated")){
            this.transitionTo("login");
        }
    }
});
