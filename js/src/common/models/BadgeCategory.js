import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class BadgeCategory extends mixin(Model, {
  name: Model.attribute('name'),
  order: Model.attribute('order'),
  description: Model.attribute('description'),
  isEnabled: Model.attribute('isEnabled'),
  createdAt: Model.attribute('createdAt'),
  isTable: Model.attribute('isTable'),
  users: Model.hasMany('users'),
  badges: Model.hasMany('badges'),
}) {
  apiEndpoint() {
    return '/badge_categories' + (this.exists ? '/' + this.data.id : '');
  }
}
