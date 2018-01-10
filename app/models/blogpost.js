import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from "@ember/service";

export default DS.Model.extend({
    session: service(),

    date: DS.attr("date"),
    content: DS.attr("string"),
    title: DS.attr("string"),
    likes: DS.attr("number"),
    likeflag: DS.attr(),
    comments: DS.hasMany("comment"),
    user_id: DS.attr("number"),

    currentUserIsOwner: computed('user_id', 'session.user_id', function () {
        let loggedInUserId = this.get("session").get("user_id");
        let postUserId = this.get("user_id");
        return loggedInUserId == postUserId;
    }),
    alreadyLiked: computed('likeflag', function () {
        return this.get("likeflag") === "t";
    })
});
