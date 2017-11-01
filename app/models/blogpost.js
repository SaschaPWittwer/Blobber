import DS from 'ember-data';

export default DS.Model.extend({
    creator: DS.attr("string"),
    date: DS.attr(),
    content: DS.attr("string"),
    title: DS.attr("string"),
    comments: DS.hasMany("comment")
});
