import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
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
});

export default Router;
