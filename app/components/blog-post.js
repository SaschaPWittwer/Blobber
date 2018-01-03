import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    actions: {
        addComment (blogPost) {
            let newComment = this.get("store").createRecord("comment", {
                blogPost: blogPost,
                content: this.get("comment"),
                blogpost_id: blogPost.id
            });
            newComment.save();
        }
    }
});
