import Ember from 'ember';

export default Ember.Service.extend({

    accessToken: null,
    isAuthenticated: Ember.computed.bool("accessToken"),

    authenticate(username, password){
        return Ember.$.post("/api/token", { user: username, pw: password }).then((result) =>{
            this.set("accessToken", result.access_Token);
        });
    },
    logout(){
        this.set("accessToken", null);
    }
});
