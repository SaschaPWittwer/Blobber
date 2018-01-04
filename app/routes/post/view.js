import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.get("store").findRecord("blogpost", params.id, { reload: true, include: 'comments' });
    }
});