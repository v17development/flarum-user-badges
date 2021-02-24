import UserPage from "flarum/components/UserPage";
import UserBadgeList from "./UserBadgeList";

export default class BadgesProfilePage extends UserPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.user = null;

    this.loadUser(m.route.param("username"));
  }

  content() {
    return UserBadgeList.component({
      user: this.user,
    });
  }

  show(user) {
    super.show(user);
    this.user = user;
  }
}
