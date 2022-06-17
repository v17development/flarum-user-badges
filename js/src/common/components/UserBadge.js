import Component from 'flarum/common/Component';
import Tooltip from 'flarum/common/components/Tooltip';
import BadgeModal from '../../forum/components/BadgeModal';

export default class UserBadge extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.tooltip = this.attrs.tooltip !== false;
    this.forceVisibility = this.attrs.forceVisibility === true;
  }

  view() {
    // Hide badge when not enabled
    if (!this.attrs.badge.isVisible() && !this.forceVisibility) {
      return null;
    }

    // Just show badge
    if (this.tooltip === false) return this.badge();

    return <Tooltip text={`${this.attrs.badge.description() ? this.attrs.badge.description() : ''}`}>{this.badge()}</Tooltip>;
  }

  badge() {
    const isPartlyHidden = !this.attrs.badge.isVisible() && this.forceVisibility;

    // This badge is an image
    if (this.attrs.badge.image()) {
      return (
        <img
          src={this.attrs.badge.image()}
          className={'UserBadgeImage'}
          onclick={() => {
            if (this.attrs.onclick) {
              this.attrs.onclick();
            }
          }}
          style={{
            opacity: isPartlyHidden ? 0.5 : undefined,
          }}
        />
      );
    }

    return (
      <span
        className={`UserBadge UserBadge-${this.attrs.badge.id()}`}
        onclick={() => {
          if (this.attrs.onclick) {
            this.attrs.onclick();
          }
        }}
        style={{
          backgroundColor: this.attrs.badge.backgroundColor(),
          color: this.attrs.badge.labelColor(),
          borderColor: this.attrs.badge.backgroundColor(),
          opacity: isPartlyHidden ? 0.5 : undefined,
        }}
      >
        <i className={this.attrs.badge.icon()} style={{ color: this.attrs.badge.iconColor() }} /> {this.attrs.badge.name()}
      </span>
    );
  }
}
