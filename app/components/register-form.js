import component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import $ from "jquery";

export default component.extend({
  errorText: "",
  hasError: false,
  password: "",

  router: service(),
  i18n: service(),
  passwordStrength: service(),

  strength: computed("password", function() {
    let pw = this.get("password");
    let i18n = this.get("i18n");
    const passwordStrength = this.get("passwordStrength");
    passwordStrength.strength(pw).then(obj => {
      let pb = $("#pwStrength");
      // Clear css classes
      pb.removeClass("bg-success");
      pb.removeClass("bg-info");
      pb.removeClass("bg-warning");
      pb.removeClass("bg-danger");

      if (!pw) {
          pb.width("0%");
          return;
      }

      switch (obj.score) {
        case 0:
        case 1:
          pb.addClass("bg-danger");
          pb.width("25%");
          pb.text(i18n.t("weak"));
          break;
        case 2:
          pb.addClass("bg-warning");
          pb.width("50%");
          pb.text(i18n.t("ok"));
          break;
        case 3:
          pb.addClass("bg-info");
          pb.width("75%");
          pb.text(i18n.t("good"));
          break;
        case 4:
          pb.addClass("bg-success");
          pb.width("100%");
          pb.text(i18n.t("strong"));
          break;
      }
      return obj;
    });
  }),

  actions: {
    register() {
      let mail = this.get("mail");
      let mailRepeated = this.get("mailRepeated");
      let password = this.get("password");
      let passwordRepeated = this.get("passwordRepeated");

      if (mail !== mailRepeated) {
        this.set("errorText", this.get("i18n").t("mailsDoNotMatch"));
        this.set("hasError", true);
        return;
      }

      if (password !== passwordRepeated) {
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
