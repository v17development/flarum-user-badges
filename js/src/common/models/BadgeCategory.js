import Model from "flarum/Model";
import mixin from "flarum/utils/mixin";

export default class BadgeCategory extends mixin(Model, {
  name: Model.attribute("name"),
  isEnabled: Model.attribute("isEnabled"),
  createdAt: Model.attribute("createdAt"),
  users: Model.hasMany("users"),
  badges: Model.hasMany("badges"),
}) {
  apiEndpoint() {
    return '/user_categories' + (this.exists ? '/' + this.data.id : '');
  }
}
