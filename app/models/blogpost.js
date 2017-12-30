import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    content: DS.attr("string"),
    title: DS.attr("string"),
    likes: DS.attr("number"),
    likeflag: DS.attr(),
    comment: DS.hasMany("comment")
});
