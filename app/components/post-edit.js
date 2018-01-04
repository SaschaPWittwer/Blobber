import component from "@ember/component";
import { inject as service } from "@ember/service";

export default component.extend({
    router: service(),
    store: service(),
    title: '',
    content: '',
    actions: {
        save() {
            let title = this.get("title");
            let content = this.get("content");

            let newPost = this.get("store").createRecord("blogpost", {
                title: title,
                content: content,
                user_id: 1
            });

            let self = this;
            
            function transitionToPost(post) {
                self.get("router").transitionTo("post.view", post);
            }

            newPost.save().then(transitionToPost);
        }
    }
});
