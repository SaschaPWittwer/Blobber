import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service("session"),

    user: "",
    password: "",

    actions: {
        doLogin(){
            const login = this.get("user");
            const password = this.get("password"); 

            this.get("session").authenticate("authenticator:oauth2", login, password).then(() =>{
                if (this.get("session").get("isAuthenticated")){
                    this.transitionToRoute("index");
                }
            });
        }
    }
});
