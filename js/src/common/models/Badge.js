import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';
import BadgeModal from '../../forum/components/BadgeModal';

export default class Badge extends mixin(Model, {
  name: Model.attribute('name'),
  icon: Model.attribute('icon'),
  order: Model.attribute('order'),
  image: Model.attribute('image'),
  description: Model.attribute('description'),
  isVisible: Model.attribute('isVisible'),
  createdAt: Model.attribute('createdAt'),
  earnedAmount: Model.attribute('earnedAmount'),
  category: Model.hasOne('category'),
  backgroundColor: Model.attribute('backgroundColor'),
  iconColor: Model.attribute('iconColor'),
  labelColor: Model.attribute('labelColor'),
}) {
  apiEndpoint() {
    return '/badges' + (this.exists ? '/' + this.data.id : '');
  }
}
