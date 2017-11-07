import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        login() {
            Ember.$("#loginModal").modal();
        }
    }
});
