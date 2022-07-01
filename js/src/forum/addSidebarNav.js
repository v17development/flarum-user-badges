import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

export default function addSidebarNav() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    items.add(
      'badges',
      <LinkButton icon="fas fa-id-badge" href={app.route('badges')}>
        {app.translator.trans('v17development-flarum-badges.forum.badge.badges')}
      </LinkButton>,
      15
    );

    return items;
  });
}
