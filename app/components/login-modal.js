import Ember from 'ember';

export default Ember.Component.extend({
    username: '',
    password: '',

    session: Ember.inject.service('session'),
    router: Ember.inject.service(),

    keyPress (key) {
        if (key.keyCode === 13) {
            this.send('doLogin');
        }
    },

    actions: {
        doLogin() {
            let user = this.get("username");
            let password = this.get("password");
            let self = this;
            this.get("session").login(user, password, () =>{
                Ember.$("#loginModal").modal('hide');
                self.get("router").transitionTo("index");
            }, () =>{
                alert("fail");
            });
        },
        close() {
            // Ember.$("#loginModal").modal('hide');
            this.get("router").transitionTo("index");
        }
    },
    didInsertElement() {
        Ember.$("#loginModal").modal({
            keyboard: false
        });
        Ember.$("#loginModal").modal('show');
        Ember.$("#user-name").focus();
    },
    willDestroyElement() {
        Ember.$("#loginModal").modal('hide');
    }
});
