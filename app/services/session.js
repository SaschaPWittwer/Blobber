import Ember from 'ember';

export default Ember.Service.extend({
    username: "",
    authorized: false,
    
    init() {
        this._super(...arguments);
        this.set("username", "");
        this.set("authorized", false);
    },

    login(username, password, success, fail) {
        let self = this;
        Ember.$.getJSON("http://blobber.azurewebsites.net/api/users", {
            username: username,
            password: password
        }).then((data) => {
            Ember.$.each(data.user, (item) => {
                if (item.username === username && item.password === password){
                    self.set("username", item.username);
                    self.set("authorized", true);
                    success(item);
                }
            });
        }).fail(() =>{
            fail();
        });
    },

    logout() {
        this.set("username", "");
    },
});
