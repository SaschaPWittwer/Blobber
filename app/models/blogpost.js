import DS from 'ember-data';

export default DS.Model.extend({
    user_id: DS.attr(),
    date: DS.attr(),
    content: DS.attr("string"),
    title: DS.attr("string"),
    likes: DS.attr("number"),
    comments: DS.hasMany("comment")
});
