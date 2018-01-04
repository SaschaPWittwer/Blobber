import component from "@ember/component";
import { inject as service } from "@ember/service";

export default component.extend({
    session: service('session'),
    router: service(),
    i18n: service(),
    searchFilter: '',
    actions: {
        search() {
            let sFilter = this.get("searchFilter");

            if (new String(sFilter).length > 0){
                this.get("router").transitionTo("/posts?filter=" + sFilter);
            }
        },
        setLanguage(language) {
            this.set('i18n.locale', language);
        },
        logout() {
            this.get("session").logout();
            this.get("router").transitionTo("index");
        }
    }
});
