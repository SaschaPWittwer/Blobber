import component from "@ember/component";
import { inject as service } from "@ember/service";
import { storageFor } from 'ember-local-storage';

export default component.extend({
    session: service('session'),
    router: service(),
    i18n: service(),
    moment: service(),
    sessionInfo: storageFor('session-info'),

    searchFilter: '',
    actions: {
        search() {
            let sFilter = this.get("searchFilter");

            let router = this.get("router");
            if (new String(sFilter).length > 0){
                router.transitionTo("/posts?filter=" + sFilter);
            } else {
                router.transitionTo("/posts");
            }
        },
        setLanguage(language) {
            this.set('i18n.locale', language);
            this.get('moment').setLocale(language);

            this.set("sessionInfo.lang", language);
        },
        logout() {
            this.get("session").logout();
            this.get("router").transitionTo("index");
        }
    }
});
