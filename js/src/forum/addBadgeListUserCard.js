import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import Link from 'flarum/common/components/Link';
import UserBadge from '../common/components/UserBadge';
import BadgeModal from './components/BadgeModal';
import SelectUserCardBadgesModal from './components/SelectUserCardBadgesModal';
import Tooltip from 'flarum/common/components/Tooltip';

export default function addBadgeListUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items) {
    // Get user
    const user = this.attrs.user;

    // Don't show badges
    if (!app.forum.attribute('showBadgesOnUserCard') || !user.userBadges) return;

    const userBadges = user.userBadges() ?? [];

    // No badges to show
    if (userBadges.length < 1 || !userBadges) return;

    const limit = app.forum.attribute('numberOfBadgesOnUserCard');

    // Check for all badges
    let visibleBadges = userBadges.filter((userBadge) => {
      return userBadge.inUserCard();
    });

    // No badges selected (yet). Just select a few
    if (visibleBadges.length === 0) {
      visibleBadges = userBadges.slice(0, limit);
    }

    const badges = visibleBadges.map((userBadge) => {
      return (
        <UserBadge
          badge={userBadge.badge()}
          onclick={() =>
            app.modal.show(BadgeModal, {
              badge: userBadge.badge(),
              userBadgeData: userBadge,
            })
          }
        />
      );
    });

    if (badges.length < userBadges.length) {
      const count = userBadges.length - visibleBadges.length;
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

    // Manage badges
    if ((user === app.session.user && app.forum.attribute('editOwnUserCardBadges')) || app.forum.attribute('editUserCardBadges')) {
      badges.push(
        <Tooltip text={app.translator.trans('v17development-flarum-badges.forum.badges_in_card.manage_badges')}>
          <a
            href={'#'}
            className="UserBadge more-badges"
            onclick={(e) => {
              e.preventDefault();
              app.modal.show(SelectUserCardBadgesModal, { user });
            }}
          >
            <i className={'fas fa-pencil-alt BadgeIconOnly'} />
          </a>
        </Tooltip>
      );
    }

    items.add('badges', badges);
  });
}
