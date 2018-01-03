import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr("date"),
    content: DS.attr("string"),
    title: DS.attr("string"),
    likes: DS.attr("number"),
    likeflag: DS.attr(),
    comments: DS.hasMany("comment")
});
