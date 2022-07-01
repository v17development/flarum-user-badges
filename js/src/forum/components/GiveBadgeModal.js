import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import Select from 'flarum/components/Select';
import Stream from 'flarum/utils/Stream';
import BadgeModal from './BadgeModal';

export default class GiveBadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    // Select image
    this.selectedBadge = this.attrs.badge ? this.attrs.badge.badge() : null;

    // Current user
    this.user = this.attrs.badge ? this.attrs.badge.user() : this.attrs.user;

    // User has badge
    this.userHasBadge = false;

    // Badge model
    this.badge = this.attrs.badge ? this.attrs.badge : app.store.createRecord('userBadges');

    // Earning reason
    this.description = Stream(this.badge.description());

    // List of available bagges
    this.categories = {};

    this.uncategorizedBadges = [];

    this.loading = false;

    // Load all available badges
    if (!this.attrs.badge) {
      this.loading = true;

      app.store
        .find('badges', {
          include: 'category',
        })
        .then((badges) => {
          badges.forEach((badge) => {
            // Categorized
            if (badge.category()) {
              const category = badge.category();

              if (!this.categories[category.id()]) {
                this.categories[category.id()] = {
                  category,
                  badges: [badge],
                };
              } else {
                this.categories[category.id()].badges.push(badge);
              }
            }
            // Uncategorized
            else {
              this.uncategorizedBadges.push(badge);
            }
          });

          this.loading = false;

          // Redraw
          m.redraw();
        });
    }
  }

  className() {
    return 'Modal--small BadgeModal';
  }

  title() {
    return app.translator.trans(`v17development-flarum-badges.forum.${this.badge.exists ? 'update' : 'give'}_badge`);
  }

  content() {
    return (
      <div>
        <div className="Modal-body">
          <div className="Form">{this.fields().toArray()}</div>
        </div>

        <div className="Modal-footer">
          <Button className={'Button Button--primary'} type={'submit'} loading={this.loading} disabled={this.userHasBadge}>
            {app.translator.trans('core.forum.composer_edit.submit_button')}
          </Button>
        </div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    // Badge selector
    items.add(
      'badge',
      <div className="BadgeModalListItem">
        <p>
          <b>{app.translator.trans('v17development-flarum-badges.forum.badge.badge')}</b>
        </p>

        <div className={'Select'}>
          <select
            value={this.selectedBadge ? this.selectedBadge.id() : 'empty'}
            disabled={!!this.attrs.badge}
            onchange={(e) => {
              if (e.target.value === 'empty') return;
              this.selectedBadge = app.store.getById('badges', e.target.value);

              // Check if the user already has this badge
              this.checkUserHasBadge(this.selectedBadge);
            }}
            className="Select-input FormControl"
          >
            <option value={'empty'}>{app.translator.trans('v17development-flarum-badges.forum.select_badge')}</option>

            {/* When no badge is selected, show all available badges */}
            {!this.attrs.badge &&
              Object.values(this.categories).map(({ category, badges }) => (
                <optgroup label={category.name()}>
                  {badges.map((badge) => (
                    <option value={badge.id()}>{badge.name()}</option>
                  ))}
                </optgroup>
              ))}

            {!this.attrs.badge && this.uncategorizedBadges.length >= 1 && (
              <optgroup label={app.translator.trans('v17development-flarum-badges.forum.uncategorized')}>
                {this.uncategorizedBadges.map((badge) => (
                  <option value={badge.id()}>{badge.name()}</option>
                ))}
              </optgroup>
            )}

            {/* When a badge is already assigned */}
            {!!this.attrs.badge && <option value={this.selectedBadge.id()}>{this.selectedBadge.name()}</option>}
          </select>
          <i class="icon fas fa-caret-down Select-caret"></i>
        </div>

        {this.userHasBadge && <p className={'UserHasBadge'}>{app.translator.trans('v17development-flarum-badges.forum.user_has_badge')}</p>}
      </div>,
      30
    );

    // Badge description
    items.add(
      'badge_description',
      <div className={'BadgeModalListItem'}>
        <p>
          <b>{app.translator.trans('v17development-flarum-badges.forum.badge.description')}:</b>
        </p>
        <p>{this.selectedBadge ? this.selectedBadge.description() : app.translator.trans('v17development-flarum-badges.forum.select_badge')}</p>
      </div>,
      30
    );

    // Badge earning reason
    items.add(
      'description',
      <div className="BadgeModalListItem">
        <p>
          <b>{app.translator.trans('v17development-flarum-badges.forum.badge.earning_reason')}</b>
        </p>
        <textarea
          className="FormControl"
          placeholder={app.translator.trans('v17development-flarum-badges.forum.badge.earning_reason')}
          bidi={this.description}
        />
      </div>,
      30
    );

    return items;
  }

  checkUserHasBadge(badge) {
    let foundBadge = false;

    this.user.userBadges().map((userBadge) => {
      if (userBadge.badge() == badge) {
        foundBadge = true;
      }
    });

    this.userHasBadge = foundBadge;

    m.redraw();
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.badge
      .save({
        description: this.description(),
        relationships: this.attrs.badge
          ? {}
          : {
              badge: this.selectedBadge,
              user: this.user,
            },
      })
      .then(
        () => {
          // Re-open badge modal
          if (this.attrs.badge) {
            app.modal.show(BadgeModal, {
              badge: this.attrs.badge.badge(),
              userBadgeData: this.attrs.badge,
            });
          } else {
            this.hide();
          }

          m.redraw();
        },
        (response) => {
          this.loading = false;
          this.handleErrors(response);
        }
      );
  }
}
