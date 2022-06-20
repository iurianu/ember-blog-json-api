import EmberRouter from '@ember/routing/router';
import config from 'blog-ember-json/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('posts', function () {
    this.route('user', { path: '/authors/:id' });
    this.route('show', { path: '/post/:id' });
    this.route('page', { path: '/page/:id' });
  });
  this.route('users', { path: '/articles/authors' });
  this.route('about');
  this.route('contact');
  this.route('not-found', { path: '/*path' });
});
