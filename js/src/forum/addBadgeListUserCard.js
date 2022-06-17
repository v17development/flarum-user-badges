import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import UserBadge from '../../common/components/UserBadge';
import BadgeModal from './BadgeModal';

export default function addBadgeListUserCard() {
  extend(UserCard.prototype, 'infoItems', function (items) {
    const userBadges = this.attrs.user.userBadges();

    if (userBadges.length < 1) return;

    items.add(
      'badges',
      userBadges.map((userBadge) => (
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
