import Modal from "flarum/components/Modal";
import Button from "flarum/components/Button";
import ItemList from "flarum/utils/ItemList";
import Link from "flarum/components/Link";
import Stream from "flarum/utils/Stream";

export default class GiveBadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.badge = this.attrs.badge ? this.attrs.badge : app.store.createRecord('userBadges');

    this.description = Stream(this.badge.description());

    this.loading = false;
  }

  className() {
    return "Modal--small";
  }

  title() {
    return app.translator.trans(
      `v17development-flarum-badges.forum.${this.badge.exists ? 'update' : 'give'}_badge`
    );
  }

  content() {
    return (
      <div>
        <div className="Modal-body">
          <div className="Form">
            {this.fields().toArray()}
          </div>
        </div>
        
        <div className="Modal-footer">
          <Button
            className={"Button Button--primary"}
            type={"submit"}
            loading={this.loading}
          >
            {app.translator.trans(
              "core.forum.composer_edit.submit_button"
            )}
          </Button>
        </div>
      </div>
    );
  }

  fields() {
    const items = new ItemList();

    items.add('description', (
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "v17development-flarum-badges.forum.badge.earning_reason"
          )}
        </label>
        <textarea 
          className="FormControl"
          placeholder={app.translator.trans(
            "v17development-flarum-badges.forum.badge.earning_reason"
          )}
          bidi={this.description}
          />
      </div>
    ), 30);

    return items;
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.badge
      .save({
        description: this.description()
      })
      .then(
        () => {
          this.hide();
          m.redraw();
        },
        response => {
            this.loading = false;
            this.handleErrors(response);
        }
    );
  }
}
