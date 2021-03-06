import component from "@ember/component";
import { inject as service } from "@ember/service";
import $ from "jquery";

export default component.extend({
  session: service(),
  store: service(),
  actions: {
    addComment(blogPost) {
      let newComment = this.get("store").createRecord("comment", {
        blogPost: blogPost,
        content: this.get("comment"),
        blogpost_id: blogPost.id
      });
      newComment.save();

      this.set("comment", "");
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
    addLike(blogPost) {
      $.ajax({
        url: "https://blobber.azurewebsites.net/api/like",
        type: "POST",
        headers: {
          Authorization: "Bearer " + this.get("session.token")
        },
        data: {
          blogpost_id: blogPost.id
        },
        success: () => {
          blogPost.reload();
        }
      });
    }
  }
});
