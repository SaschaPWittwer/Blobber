import Route from '@ember/routing/route';


export default Route.extend({
    queryParams: {
        filter: {
            refreshModel: true
        }
    },

    model(params) {
        return this.get("store").findAll("blogpost");
    }
});
