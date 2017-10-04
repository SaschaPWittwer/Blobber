export function initialize(application) {
  application.inject("route", "auth", "service:authentication");
  application.inject("controller", "auth", "service:authentication");
}

export default {
  initialize
};
