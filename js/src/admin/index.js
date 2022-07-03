import Badge from '../common/models/Badge';
import BadgeCategory from '../common/models/BadgeCategory';
import BadgeActionDriverSettings from './components/BadgeActionDriverSettings';
import SettingsPage from './components/SettingsPage';

app.initializers.add('v17development-user-badges', () => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;

  // Register extension settings page
  app.extensionData.for('v17development-user-badges').registerPage(SettingsPage);

  app.extensionData
    .for('v17development-user-badges')
    .registerPermission(
      {
        icon: 'fas fa-users',
        label: app.translator.trans('v17development-flarum-badges.admin.permissions.badge_detail_users'),
        permission: 'badges.canViewDetailedUsers',
        allowGuest: true,
      },
      'view',
      90
    )
    .registerPermission(
      {
        icon: 'fas fa-id-card',
        label: app.translator.trans('v17development-flarum-badges.admin.permissions.edit_own_card_badges'),
        permission: 'badges.editOwnUserCardBadges',
      },
      'start',
      90
    )
    .registerPermission(
      {
        icon: 'fas fa-address-card',
        label: app.translator.trans('v17development-flarum-badges.admin.permissions.edit_card_badges'),
        permission: 'badges.editUserCardBadges',
      },
      'moderate',
      90
    )
    .registerPermission(
      {
        icon: 'fas fa-user-tag',
        label: app.translator.trans('v17development-flarum-badges.admin.permissions.give_badge'),
        permission: 'badges.giveBadge',
      },
      'moderate',
      90
    )
    .registerPermission(
      {
        icon: 'fas fa-user-times',
        label: app.translator.trans('v17development-flarum-badges.admin.permissions.take_badge'),
        permission: 'badges.removeBadge',
      },
      'moderate',
      90
    );

  // Auto moderation
  if (app.autoModeratorForms) {
    app.autoModeratorForms.action.give_badge = BadgeActionDriverSettings;
    app.autoModeratorForms.action.remove_badge = BadgeActionDriverSettings;

    app.autoModeratorForms.requirement.has_badge = BadgeActionDriverSettings;
  }
});
