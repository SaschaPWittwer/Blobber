import Route from '@ember/routing/route';


export default Route.extend({
    queryParams: {
        filter: {
            refreshModel: true
        }
    },

    model() {
        return this.get("store").findAll("blogpost");
    }
});
