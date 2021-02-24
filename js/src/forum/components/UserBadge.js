import Component from 'flarum/Component';
import BadgeModal from './BadgeModal';

export default class UserBadge extends Component {
  view() {
    return (
      <span 
        className="UserBadge" 
        title={`${this.attrs.badge.description() ? this.attrs.badge.description() : ''}`}
        onclick={() => app.modal.show(BadgeModal, {
          badge: this.attrs.badge,
          userBadgeData: this.attrs.userBadgeData
        })}
        >
        <i className={this.attrs.badge.icon()} /> {this.attrs.badge.name()}
      </span>
    );
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.$().tooltip();
  }
}