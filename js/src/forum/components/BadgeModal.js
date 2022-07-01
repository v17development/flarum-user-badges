import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import fullTime from 'flarum/helpers/fullTime';
import ItemList from 'flarum/utils/ItemList';
import LinkButton from 'flarum/components/LinkButton';
import GiveBadgeModal from './GiveBadgeModal';

export default class BadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.loading = false;
  }

  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans('v17development-flarum-badges.forum.badge_information');
  }

  content() {
    return (
      <div>
        <div className="Modal-body">{this.data().toArray()}</div>
        <div className="Modal-footer">
          <LinkButton
            href={app.route('badges.item', {
              id: this.attrs.badge.id(),
            })}
            className={'Button'}
            style={{
              margin: '0 10px',
            }}
          >
            {app.translator.trans('v17development-flarum-badges.forum.badge.badge_details')}
          </LinkButton>

          {this.attrs.userBadgeData && app.forum.attribute('canGiveBadge') && (
            <Button
              className={'Button Button--primary'}
              onclick={() => {
                if (confirm(app.translator.trans('v17development-flarum-badges.forum.moderation.remove_badge_confirm'))) {
                  this.loading = true;
                  this.attrs.userBadgeData.delete().then(() => this.hide());
                }
              }}
              loading={this.loading}
            >
              {app.translator.trans('v17development-flarum-badges.forum.moderation.remove_badge')}
            </Button>
          )}
        </div>
      </div>
    );
  }

  data() {
    const items = new ItemList();

    // Badge name
    items.add(
      'name',
      <div className={'BadgeModalListItem'}>
        <p>
          <b>{app.translator.trans('v17development-flarum-badges.forum.badge.name')}:</b>
        </p>
        <p>{this.attrs.badge.name()}</p>
      </div>
    );

    // Badge description
    items.add(
      'description',
      <div className={'BadgeModalListItem'}>
        <p>
          <b>{app.translator.trans('v17development-flarum-badges.forum.badge.description')}:</b>
        </p>
        <p>{this.attrs.badge.description()}</p>
      </div>
    );

    // Badge earning reason
    if (this.attrs.userBadgeData && (this.attrs.userBadgeData.description() || app.forum.attribute('canGiveBadge'))) {
      items.add(
        'earning_reason',
        <div className={'BadgeModalListItem'}>
          <p>
            <b>{app.translator.trans('v17development-flarum-badges.forum.badge.earning_reason')}:</b>
          </p>

          <p>
            {this.attrs.userBadgeData.description() ? (
              this.attrs.userBadgeData.description()
            ) : (
              <i>{app.translator.trans('v17development-flarum-badges.forum.badge.no_earning_reason')}</i>
            )}
          </p>
          <p>
            {app.forum.attribute('canGiveBadge') && (
              <a
                href={'#'}
                onclick={(e) => {
                  e.preventDefault();
                  app.modal.show(GiveBadgeModal, {
                    badge: this.attrs.userBadgeData,
                  });
                }}
              >
                {app.translator.trans('v17development-flarum-badges.forum.badge.update_earning_reason')}
              </a>
            )}
          </p>
        </div>
      );
    }

    // Badge earned on
    if (this.attrs.userBadgeData) {
      items.add(
        'earned_date',
        <div className={'BadgeModalListItem'}>
          <p>
            <b>{app.translator.trans('v17development-flarum-badges.forum.badge.earned_on')}:</b>
          </p>
          <p>{fullTime(this.attrs.userBadgeData.assignedAt())}</p>
        </div>
      );
    }

    // Badge category
    if (this.attrs.userBadgeData) {
      items.add(
        'category',
        <div className={'BadgeModalListItem'}>
          <p>
            <b>{app.translator.trans('v17development-flarum-badges.forum.badge.category')}:</b>
          </p>
          <p>
            {this.attrs.badge.category() && this.attrs.badge.category().name()}

            {/* Uncategorized */}
            {!this.attrs.badge.category() && app.translator.trans('v17development-flarum-badges.forum.uncategorized')}
            {/* <Link
              href={app.route("badges.category", {
                category: this.attrs.badge.category().id(),
              })}
            >
              {app.translator.trans(
                "v17development-flarum-badges.forum.all_badges"
              )}
            </Link> */}
          </p>
        </div>
      );
    }

    // Badge category
    if (this.attrs.badge && this.attrs.badge.earnedAmount()) {
      items.add(
        'earned_amount',
        <div className={'BadgeModalListItem'}>
          <p>
            {app.translator.trans('v17development-flarum-badges.forum.badge.earned_count', {
              count: this.attrs.badge.earnedAmount(),
            })}
          </p>
        </div>
      );
    }

    return items;
  }
}
