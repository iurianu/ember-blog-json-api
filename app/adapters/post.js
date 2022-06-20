import ApplicationAdapter from './application';

export default class PostAdapter extends ApplicationAdapter {
  pathForType() {
    return 'posts';
  }
}
