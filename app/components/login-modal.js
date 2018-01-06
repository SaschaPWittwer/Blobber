import { inject as service } from "@ember/service";
import component from "@ember/component";
import $ from 'jquery';

export default component.extend({
    username: '',
    password: '',
    errorText: '',
    hasError: false,

    session: service('session'),
    router: service(),
    i18n: service(),

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
            this.get("session").login(user, password, () => {
                self.set("errorText", "");
                self.set("hasError", false);
                $("#loginModal").modal('hide');
                self.get("router").transitionTo("index");
            }, () => {
                self.set("errorText", this.get("i18n").t("loginError"));
                self.set("hasError", true);
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
