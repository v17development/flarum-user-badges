import UserPage from 'flarum/components/UserPage';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import UserBadgeList from './UserBadgeList';

export default class BadgesProfilePage extends UserPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.user = null;

    this.loading = true;

    this.loadUser(m.route.param('username'));
  }

  content() {
    if (!this.user || this.loading) {
      return <LoadingIndicator size={46} />;
    }

    return UserBadgeList.component({
      user: this.user,
    });
  }

  show(user) {
    super.show(user);
    this.user = user;

    app.store
      .find('users', user.id(), {
        include: 'userBadges,userBadges.badge,userBadges.badge.category',
      })
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
