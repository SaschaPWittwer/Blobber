import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
    session: service(),
    beforeModel(transition) {
        if (!this.get("session.isAuthorized")) {
            transition.abort();
        }
    },
});
