import component from '@ember/component';
import { computed } from '@ember/object';

export default component.extend({
    sortedPosts: computed('model', function () {
        let posts = this.get('posts');
        return posts.sortBy("date").toArray().reverse();
    }),
});
