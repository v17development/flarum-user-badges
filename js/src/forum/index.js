import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import UserPage from 'flarum/components/UserPage';
import UserControls from 'flarum/utils/UserControls';
import LinkButton from 'flarum/components/LinkButton';
import Button from 'flarum/components/Button';
import Badge from '../common/models/Badge';
import BadgeCategory from '../common/models/BadgeCategory';
import UserBadge from '../common/models/UserBadge';
import BadgesProfilePage from './components/BadgesProfilePage';
import BadgesOverviewPage from './components/BadgesOverviewPage';
import BadgeItemPage from './components/BadgeItemPage';
import GiveBadgeModal from './components/GiveBadgeModal';
import addSidebarNav from './addSidebarNav';
import UserBadgeListState from './states/UserBadgeListState';
import BadgeReceivedNotification from './notification/BadgeReceivedNotification';
import NotificationGrid from 'flarum/forum/components/NotificationGrid';
import addBadgeListUserCard from './addBadgeListUserCard';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';

app.initializers.add('v17development-flarum-badges', (app) => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;
  app.store.models.userBadges = UserBadge;

  User.prototype.userBadges = Model.hasMany('userBadges');
  User.prototype.userPrimaryBadge = Model.hasOne('userPrimaryBadge');

  // Add user badges to the user profile
  app.routes['user.badges'] = {
    path: '/u/:username/badges',
    component: BadgesProfilePage,
  };

  // Badges overview page
  app.routes.badges = {
    path: '/badges',
    component: BadgesOverviewPage,
  };

  // Future
  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesOverviewPage,
  // };

  // Badge item page
  app.routes['badges.item'] = {
    path: '/badges/:id',
    component: BadgeItemPage,
  };

  addSidebarNav();

  app.userBadgeListState = new UserBadgeListState({});

  // Badge received notification
  app.notificationComponents.badgeReceived = BadgeReceivedNotification;

  // Enable badge notifications?
  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('badgeReceived', {
      name: 'badgeReceived',
      icon: 'fas fa-user-tag',
      label: app.translator.trans('v17development-flarum-badges.forum.notification.settings'),
    });
  });

  // Add uploads to user page menu items
  extend(UserPage.prototype, 'navItems', function (items) {
    items.add(
      'badges',
      LinkButton.component(
        {
          href: app.route('user.badges', {
            username: this.user.username(),
          }),
          name: 'badges',
          icon: 'fas fa-user-tag',
        },
        [
          app.translator.trans('v17development-flarum-badges.forum.badge.badges'),
          <span className="Button-badge">{this.user.userBadges().length}</span>,
        ]
      ),
      90
    );
  });

  extend(UserControls, 'moderationControls', function (items, user) {
    // User can give badges
    if (app.forum.attribute('canGiveBadge')) {
      items.add(
        'test',
        <Button
          icon="fas fa-user-tag"
          onclick={() =>
            app.modal.show(GiveBadgeModal, {
              user: user,
            })
          }
        >
          {app.translator.trans('v17development-flarum-badges.forum.give_badge')}
        </Button>
      );
    }
  });

  addBadgeListUserCard();

  extend(DiscussionListState.prototype, 'requestParams', function (params) {
    if (typeof params.include === 'string') {
      params.include = [params.include];
    } else {
      params.include?.push('user.userBadges', 'user.userBadges.badge');
    }
  });
});
