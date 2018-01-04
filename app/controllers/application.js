import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    hotPosts: computed('model', function () {
        let posts = this.get("model");
        return posts.sortBy("likes").toArray().reverse().slice(0, 8);
    })
});
