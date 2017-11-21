import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service(),
    i18n: Ember.inject.service(),
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
        }
    }
});
