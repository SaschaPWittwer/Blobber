import Ember from 'ember';

export default Ember.Controller.extend({
    user: "",
    password: "",
    actions: {
        doLogin(){
            const login = this.get("user");
            const password = this.get("password");
            this.get("auth").authenticate(login, password).then(() =>{
                if (this.get("auth").get("isAuthenticated")){
                    this.transitionToRoute("index");
                }
            });
        }
    }
});
