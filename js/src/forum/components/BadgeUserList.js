import Component from 'flarum/common/Component';
import Button from 'flarum/components/Button';
import Link from 'flarum/components/Link';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import avatar from 'flarum/helpers/avatar';
import humanTime from 'flarum/helpers/humanTime';

export default class BadgeUserList extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    // Load articles
    this.attrs.state.refreshParams({
      filter: {
        badge: this.attrs.badgeId,
      },
      sort: '-assignedAt',
    });
  }

  view() {
    const state = this.attrs.state;

    let loading = null;

    if (state.isInitialLoading() || state.isLoadingNext()) {
      loading = LoadingIndicator.component({
        size: 'large',
      });
    } else if (state.hasNext()) {
      loading = Button.component(
        {
          className: 'Button',
          icon: 'fas fa-chevron-down',
          onclick: state.loadNext.bind(state),
        },
        app.translator.trans('core.forum.discussion_list.load_more_button')
      );
    }

    // No items
    if (state.isInitialLoading() && state.isEmpty()) {
      return <LoadingIndicator />;
    }

    // No items
    if (state.isEmpty()) {
      return <div className={'BadgeUserList-empty'}>{app.translator.trans('v17development-flarum-badges.forum.no_received')}</div>;
    }

    return (
      <div>
        <ul className={'BadgeUserList'}>
          {state.getPages().map((pg) => {
            return pg.items.map((userBadge) => {
              return (
                <li>
                  <Link
                    href={app.route('user.badges', {
                      username: userBadge.user().username(),
                    })}
                    className={'BadgeUserList-user'}
                  >
                    {avatar(userBadge.user())}

                    <div className={'BadgeUserList-userinfo'}>
                      <h4>{userBadge.user().displayName()}</h4>

                      <p>
                        {app.translator.trans('v17development-flarum-badges.forum.badge.received_on', {
                          date: humanTime(userBadge.assignedAt()),
                        })}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            });
          })}
        </ul>

        {loading && <div className="SupportSearchList-loadMore">{loading}</div>}
      </div>
    );
  }
}
