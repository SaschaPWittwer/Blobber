import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ["filter"],
    filter: null,

    filteredPosts: Ember.computed('filter', 'model', function(){
        let filter = this.get("filter");
        let posts = this.get("model");

        return posts;
    })
});
