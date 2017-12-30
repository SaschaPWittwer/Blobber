import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get("store").findAll("blogpost").then(result => {
            return result.sortBy("likes").toArray().reverse().slice(0, 8);
        });
    }
});
