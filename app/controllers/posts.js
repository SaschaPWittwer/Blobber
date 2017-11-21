import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ["filter"],
    filter: null,

    filteredPosts: Ember.computed('filter', 'model', function(){
        let filter = this.get("filter").toLowerCase();
        let posts = this.get("model");

        if (filter) {
            return this.get("store").findAll("blogpost").then(posts => {
                posts.filterBy("content", filter);
             });
        }
        else {
            return posts;
        }
    })
});
