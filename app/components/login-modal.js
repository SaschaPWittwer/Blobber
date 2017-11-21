import Ember from 'ember';

export default Ember.Component.extend({
    username: '',
    password: '',
    session: Ember.inject.service('session'),

    actions: {
        doLogin() {
            let user = this.get("username");
            let password = this.get("password");

            this.get("session").login(user, password, (data) =>{
                alert(data);
            }, () =>{
                alert("fail");
            });
        }
    }
});
