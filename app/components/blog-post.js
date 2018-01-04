import component from "@ember/component";
import { inject as service } from "@ember/service";
import $ from "jquery";

export default component.extend({
    session: service(),
    store: service(),
    actions: {
        addComment (blogPost) {
            let newComment = this.get("store").createRecord("comment", {
                blogPost: blogPost,
                content: this.get("comment"),
                blogpost_id: blogPost.id
            });
            newComment.save();
        },
        addLike (blogPost) {
            $.post("https://blobber.azurewebsites.net/api/like", {
                like: {
                    blogpost_id: blogPost.id
                }
            }, () => {
                blogPost.reload();
            }).fail(reasons => {
                alert(reasons);
            });
        }
    }
});
