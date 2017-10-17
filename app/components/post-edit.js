import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service(),
    store: Ember.inject.service(),
    title: '',
    content: '',
    actions: {
        save() {
            let title = this.get("title");
            let content = this.get("content");

            let newPost = this.get("store").createRecord("post", {
                title: title,
                content: content
            });

            let self = this;
            
            function transitionToPost(post) {
                self.get("router").transitionTo("post.view", post);
            }

            newPost.save().then(transitionToPost);
        }
    }
});
