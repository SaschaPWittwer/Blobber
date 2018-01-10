import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from "@ember/service";

export default DS.Model.extend({
    session: service(),

    content: DS.attr("string"),
    date: DS.attr("date"),
    username: DS.attr("string"),
    blogpost_id: DS.attr(),
    user_id: DS.attr("number"),
    blogPost: DS.belongsTo("blogpost"),

    currentUserIsOwner: computed('user_id', 'session.user_id', function () {
        let loggedInUserId = this.get("session").get("user_id");
        let postUserId = this.get("user_id");
        return loggedInUserId == postUserId;
    }),
});
