import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        // We only have to parse request to exactly one resource
        if (requestType !== 'findRecord'){
            return this._super(...arguments);
        }

        // Get blog post
        let blogpost = payload.blogpost[0];
        if (blogpost) {
            payload.comments = blogpost.comment;
            blogpost.comments = blogpost.comment.map(c => c.id);
            delete blogpost.comment;
        }

        return this._super(...arguments);
    }
});
