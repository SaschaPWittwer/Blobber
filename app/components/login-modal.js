import Ember from 'ember';

export default Ember.Component.extend({
    username: '',
    password: '',

    actions: {
        doLogin() {
            let user = this.get("username");
            let password = this.get("password");

            alert(user, password);
        }
    }
});
