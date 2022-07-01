import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import icon from 'flarum/helpers/icon';
import loadAllBadges from '../utils/loadBadges';

export default class BadgeSelector extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.loaded = false;

    // Load badges
    loadAllBadges(() => (this.loaded = true));
  }

  view() {
    if (!this.loaded) {
      return (
        <div className="Form-group">
          <label>{this.attrs.label}</label>

          <Button className={'Button Button--danger'} style={{ float: 'none' }} loading>
            {app.translator.trans('v17development-flarum-badges.admin.auto_moderator.badge_selector.loading_badges')}
          </Button>
        </div>
      );
    }

    const badge = app.store.getById('badges', this.attrs.value);
    const label = badge
      ? [icon(badge.icon()), '\t', badge.name()]
      : app.translator.trans('v17development-flarum-badges.admin.auto_moderator.badge_selector.placeholder');
    return (
      <div className="Form-group">
        <label>{this.attrs.label}</label>

        {this.attrs.disabled ? (
          <div className="Button Button--danger">{label}</div>
        ) : (
          <Dropdown label={label} disabled={this.attrs.disabled} buttonClassName="Button Button--danger">
            {app.store.all('badges').map((g) =>
              Button.component(
                {
                  active: badge && badge.id() === g.id(),
                  disabled: badge && badge.id() === g.id(),
                  icon: g.icon(),
                  onclick: () => {
                    this.attrs.onchange(g.id());
                  },
                },
                g.name()
              )
            )}
          </Dropdown>
        )}
      </div>
    );
  }
}
