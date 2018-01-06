import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
    passwordStrength: service(),
    beforeModel() {
        const passwordStrength = this.get('passwordStrength');
        return passwordStrength.load();
    }
});
