import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') body;
  @attr('string') title;
  @belongsTo('user') user;
}
