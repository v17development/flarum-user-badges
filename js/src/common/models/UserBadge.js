import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class UserBadge extends mixin(Model, {
  user: Model.hasOne('user'),
  badge: Model.hasOne('badge'),
  description: Model.attribute('description'),
  isPrimary: Model.attribute('isPrimary'),
  assignedAt: Model.attribute('assignedAt'),
  inUserCard: Model.attribute('inUserCard'),
}) {
  apiEndpoint() {
    return '/user_badges' + (this.exists ? '/' + this.data.id : '');
  }
}
