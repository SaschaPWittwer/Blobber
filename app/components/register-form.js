import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service(),
    i18n: Ember.inject.service(),

    actions: {
        register () {
            let mail = this.get("mail");
            let mailRepeated = this.get("mailRepeated");
            let password = this.get("password");
            let passwordRepeated = this.get("passwordRepeated");

            if (mail !== mailRepeated)
            {
                alert(this.get("i18n").t("mailsDoNotMatch"));
                return;
            }

            if (password !== passwordRepeated)
            {
                alert(this.get("i18n").t("passwordsDoNotMatch"));
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
            Ember.$.post("https://blobber.azurewebsites.net/api/createuser", user, () => {
                self.get("router").transitionTo("login");
            }).fail(reason => {
                alert(reason);
            });
        }
    }
});
