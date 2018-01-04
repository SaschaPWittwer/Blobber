import { inject as service } from "@ember/service";
import component from "@ember/component";
import $ from 'jquery';

export default component.extend({
    username: '',
    password: '',

    session: service('session'),
    router: service(),

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
                $("#loginModal").modal('hide');
                self.get("router").transitionTo("index");
            }, () =>{
                alert("fail");
            });
        },
        close() {
            this.get("router").transitionTo("index");
        }
    },
    didInsertElement() {
        $("#loginModal").modal({
            keyboard: false
        });
        $("#loginModal").modal('show');
        $("#user-name").focus();
    },
    willDestroyElement() {
        $("#loginModal").modal('hide');
    }
});
