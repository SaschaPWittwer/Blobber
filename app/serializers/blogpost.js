import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    // serialize(snapshot, options) {
    //     let json = this._super(...arguments);

    //     json.comments = json.comment;
    //     delete json.comment;

    //     alert(json);

    //     return json;
    // },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {

        if (payload.blogpost){
            payload.comments = payload.blogpost.comment;
            alert(payload.blogpost.comment);
            alert(payload.comments);

            delete payload.blogpost.comment;
        }

        return this._super(...arguments);
    }
});
