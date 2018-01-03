import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    actions: {
        addComment (blogPost) {
            // Ember.$.post("https://blobber.azurewebsites.net/api/comments", {
            //     comment: {
            //         content: this.get('comment'),
            //         blogpost_id: blogPostId
            //     }
            // }, success => {
            //     alert(success);
            // });
            let newComment = this.get("store").createRecord("comment", {
                blogPost: blogPost,
                content: this.get("comment"),
                blogpost_id: blogPost.id
            });
            newComment.save();
        }
    }
});
