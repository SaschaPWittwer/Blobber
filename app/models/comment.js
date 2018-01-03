import DS from 'ember-data';

export default DS.Model.extend({
    content: DS.attr("string"),
    date: DS.attr("date"),
    username: DS.attr("string"),
    blogpost_id: DS.attr(),
    user_id: DS.attr(),
    blogPost: DS.belongsTo("blogpost"),
});
