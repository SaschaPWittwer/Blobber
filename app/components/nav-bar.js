import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service(),
    searchFilter: '',
    actions: {
        search() {
            let filter = this.get("searchFilter");

            if (new String(filter).length > 0){
                this.get("router").transitionTo("/posts/search/" + filter);
            }
        }
    }
});
