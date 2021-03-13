import Component from "flarum/Component";
import Button from "flarum/components/Button";
import EditBadgeModal from "./EditBadgeModal";

export default class SortableBadge extends Component {
  oninit(attrs) {
    super.oninit(attrs);

    this.loading = false;
  }

  view() {
    const badge = this.attrs.badge;

    return (
      <li data-id={badge.id()}>
        <div className="SortableBadges-info">
          <span className={"BadgeDetails"}>
            <span 
              className={"UserBadge"} 
              onclick={() =>
                app.modal.show(EditBadgeModal, {
                  badge,
                })
              }>
              <i className={badge.icon()} /> {badge.name()}
            </span>
          </span>
          <span className={"BadgeButtons"}>
            <Button
              className={"Button"}
              disabled={this.loading}
              onclick={() =>
                app.modal.show(EditBadgeModal, {
                  badge,
                })
              }
            >
              <i className={"fas fa-edit"} />
            </Button>
            <Button 
              className={"Button"}
              disabled={this.loading}
              onclick={() => {
                if(confirm("Are you sure you want to delete this badge?")) {
                  this.loading = true;

                  badge
                    .delete()
                    .then(() => m.redraw())
                    .catch(() => this.loading = false);
                }
              }}
              >
              <i className={"fas fa-trash"} />
            </Button>
          </span>
        </div>
      </li>
    );
  }
}
