import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service(),
    searchFilter: '',
    actions: {
        search() {
            let sFilter = this.get("searchFilter");

            if (new String(sFilter).length > 0){
                this.get("router").transitionTo("/posts?filter=" + sFilter);
            }
        }
    }
});
