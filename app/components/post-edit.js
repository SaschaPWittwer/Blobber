import component from "@ember/component";
import { inject as service } from "@ember/service";

export default component.extend({
    router: service(),
    store: service(),
    title: '',
    content: '',
    isNew: false,
    postId: 0,

    actions: {
        save() {
            let title = this.get("title");
            let content = this.get("content");
            let isNew = this.get("isNew");

            let self = this;
            function transitionToPost(post) {
                self.get("router").transitionTo("post.view", post);
            }

            if (isNew) {
                let newPost = this.get("store").createRecord("blogpost", {
                    title: title,
                    content: content
                });
                newPost.save().then(transitionToPost);
            } else {
                let id = this.get("postId");
                this.get("store").findRecord("blogpost", id).then(post => {
                    post.set("title", title);
                    post.set("content", content);
                    
                    post.save().then(transitionToPost);
                });
            }
        },
        delete() {
            let self = this;
            let id = this.get("postId");
            this.get("store").findRecord("blogpost", id, { backgroundReload: false }).then(post => {
                post.destroyRecord().then(() => {
                    self.get("router").transitionTo("index");
                });
            });
        }
    }
});
