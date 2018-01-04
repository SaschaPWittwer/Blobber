import component from "@ember/component";
import { inject as service } from "@ember/service";
import $ from "jquery";


export default component.extend({
    errorText: '',
    hasError: false,

    router: service(),
    i18n: service(),
    
    actions: {
        register () {
            let mail = this.get("mail");
            let mailRepeated = this.get("mailRepeated");
            let password = this.get("password");
            let passwordRepeated = this.get("passwordRepeated");

            if (mail !== mailRepeated)
            {
                this.set("errorText", this.get("i18n").t("mailsDoNotMatch"));
                this.set("hasError", true);
                return;
            }

            if (password !== passwordRepeated)
            {
                this.set("errorText", this.get("i18n").t("passwordsDoNotMatch"));
                this.set("hasError", true);
                return;
            }

            let user = {
                name: this.get("firstname"),
                lastname: this.get("lastname"),
                username: this.get("username"),
                password: password,
                mail: mail
            };
            
            let self = this;
            $.post("https://blobber.azurewebsites.net/api/createuser", user, () => {
                self.get("router").transitionTo("login");
            }).fail(reason => {
                alert(reason);
            });
        }
    }
});
