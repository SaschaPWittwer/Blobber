import DS from 'ember-data';

export default DS.Model.extend({
    user_id: DS.attr(),
    date: DS.attr(),
    content: DS.attr("string"),
    title: DS.attr("string"),
    comments: DS.hasMany("comment")
});
