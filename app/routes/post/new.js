import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.get("store").createRecord("post");
    },
    actions: {
        save(model) {

            let self = this;

            function transitionToPost(post) {
                self.transitionTo("post.view", post);
            }

            model.save().then(transitionToPost);
        }
    }
});
