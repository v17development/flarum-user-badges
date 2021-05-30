import Component from "flarum/common/Component";
import Tooltip from "flarum/common/components/Tooltip";
import BadgeModal from "./BadgeModal";

export default class UserBadge extends Component {
  view() {
    // Hide badge when not enabled
    if (!this.attrs.badge.isVisible()) {
      return null;
    }

    return (
      <Tooltip
        text={`${
          this.attrs.badge.description() ? this.attrs.badge.description() : ""
        }`}>
        <span
          className="UserBadge"
          onclick={() =>
            app.modal.show(BadgeModal, {
              badge: this.attrs.badge,
              userBadgeData: this.attrs.userBadgeData,
            })
          }
        >
          <i className={this.attrs.badge.icon()} /> {this.attrs.badge.name()}
        </span>
      </Tooltip>
    );
  }
}
