import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import LinkButton from 'flarum/components/LinkButton';
import BadgeUserList from './BadgeUserList';

export default class BadgeItemPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    this.bodyClass = 'App--index';

    const found = app.store.getById('badges', m.route.param('id'));

    this.loading = !found;

    if (!found) {
      // Load badge categories
      app.store.find(`badges/${m.route.param('id')}`).then((badge) => {
        this.loading = false;

        app.history.push('badgeItemPage', badge.name());

        this.setTitle(badge);

        m.redraw();
      });
    } else {
      app.history.push('badgeItemPage', found.name());

      this.setTitle(found);
    }
  }

  setTitle(badge) {
    app.setTitle(`${badge.name()} - ${app.translator.trans('v17development-flarum-badges.forum.badge.badges')}`);
  }

  view() {
    const badge = app.store.getById('badges', m.route.param('id'));

    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}

        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <LinkButton href={app.route('badges')} icon={'fas fa-chevron-left'} className={'Button BadgesOverviewButton'}>
                {app.translator.trans('v17development-flarum-badges.forum.badge.badges')}
              </LinkButton>

              {this.loading && <LoadingIndicator size={'large'} />}

              {!this.loading && (
                <div className={'BadgeUserListInfo'}>
                  <i className={badge.icon()} />

                  <div className={'BadgeUserListInfo-meta'}>
                    <h3>{badge.name()}</h3>
                    <p>{badge.description()}</p>
                  </div>
                </div>
              )}

              {badge && (
                <h3>
                  {app.translator.trans('v17development-flarum-badges.forum.badge.earned_by_count', {
                    count: badge.earnedAmount(),
                  })}
                </h3>
              )}

              {!this.loading && app.forum.attribute('canViewDetailedBadgeUsers') && (
                <BadgeUserList state={app.userBadgeListState} badgeId={badge.id()} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
