import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('post', function(){
      this.route('new');
      this.route('view', { path: 'view/:id'});
  });
  this.route('login');
  this.route('register');
});

export default Router;
