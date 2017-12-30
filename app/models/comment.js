import DS from 'ember-data';

export default DS.Model.extend({
    content: DS.attr("string"),
    date: DS.attr("date"),
    username: DS.attr("string"),
    post: DS.belongsTo("post"),
});
