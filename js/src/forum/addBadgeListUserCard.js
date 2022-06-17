import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import Link from 'flarum/common/components/Link';
import UserBadge from '../common/components/UserBadge';
import BadgeModal from './components/BadgeModal';

export default function addBadgeListUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items) {
    const user = this.attrs.user;
    const userBadges = user.userBadges();

    if (userBadges.length < 1 || !app.forum.attribute('showBadgesOnUserCard')) return;

    const limit = app.forum.attribute('numberOfBadgesOnUserCard');
    const badges = userBadges.slice(0, limit).map((userBadge) => (
      <UserBadge
        badge={userBadge.badge()}
        onclick={() =>
          app.modal.show(BadgeModal, {
            badge: userBadge.badge(),
            userBadgeData: userBadge,
          })
        }
      />
    ));

    if (badges.length < userBadges.length) {
      const count = userBadges.length - badges.length;
      badges.push(
        <Link
          href={app.route('user.badges', {
            username: user.username(),
          })}
          className="UserBadge more-badges"
        >
          {app.translator.trans('v17development-flarum-badges.forum.badge.others_link', { count })}
        </Link>
      );
    }

    items.add('badges', badges);
  });
}
