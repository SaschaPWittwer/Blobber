import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ["filter"],
    filter: null,

    filteredPosts: computed('filter', function() {
        let filter = this.get("filter").toLowerCase();
        let posts = this.get("model");

        if (filter) {
            return posts.filter(bp => {
                let content = bp.get("content").toLocaleLowerCase();
                let title = bp.get("title").toLocaleLowerCase();
                
                if (title.includes(filter) || content.includes(filter)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        else {
            return posts;
        }
    })
});
