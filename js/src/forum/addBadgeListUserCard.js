import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import UserBadge from '../common/components/UserBadge';
import BadgeModal from './components/BadgeModal';

export default function addBadgeListUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items) {
    const userBadges = this.attrs.user.userBadges();
    const limitedBadges = userBadges.slice(0, app.forum.attribute('numberOfBadgesOnUserCard'));

    if (userBadges.length < 1 || !app.forum.attribute('showBadgesOnUserCard')) return;

    items.add(
      'badges',
      limitedBadges.map((userBadge) => (
        <UserBadge
          badge={userBadge.badge()}
          onclick={() =>
            app.modal.show(BadgeModal, {
              badge: userBadge.badge(),
              userBadgeData: userBadge,
            })
          }
        />
      ))
    );
  });
}
