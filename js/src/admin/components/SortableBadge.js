import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import EditBadgeModal from './EditBadgeModal';

export default class SortableBadge extends Component {
  view() {
    const badge = this.attrs.badge;

    return (
      <li data-id={badge.id()}>
        <div className="SortableBadges-info">
          <span className={"BadgeDetails"}>
            <span className={"UserBadge"}>
              <i className={badge.icon()} /> {badge.name()}
            </span>
          </span>
          <span className={"BadgeButtons"}>
            <Button
              className={"Button"}
              onclick={() => app.modal.show(EditBadgeModal, { 
                badge
              })}
              >
                <i className={"fas fa-edit"} />
            </Button>
            <Button
              className={"Button"}
              onclick={() => app.modal.show('')}
              >
                <i className={"fas fa-trash"} />
            </Button>
          </span>
        </div>
      </li>
    );
  }
}