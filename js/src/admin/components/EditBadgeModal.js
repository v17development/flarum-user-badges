import Modal from "flarum/components/Modal";
import ItemList from "flarum/utils/ItemList";
import Button from "flarum/components/Button";
import Switch from "flarum/components/Switch";
import Stream from "flarum/utils/Stream";

export default class EditBadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    // Badge model
    this.badge = this.attrs.badge
      ? this.attrs.badge
      : app.store.createRecord("badges");

    // Name
    this.name = Stream(this.badge.name());

    // Icon
    this.icon = Stream(this.badge.icon());

    // Description
    this.description = Stream(this.badge.description());

    // Is visible
    this.isVisible = Stream(this.badge.exists ? this.badge.isVisible() : true);
  }

  className() {
    return "Modal--small";
  }

  title() {
    return app.translator.trans(
      `v17development-flarum-badges.admin.${
        this.badge.exists ? "update_badge" : "new_badge"
      }`
    );
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">{this.data().toArray()}</div>
      </div>
    );
  }

  data() {
    const items = new ItemList();

    items.add(
      "name",
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "v17development-flarum-badges.admin.badge.name"
          )}
          :
        </label>
        <input
          className="FormControl"
          placeholder={app.translator.trans(
            "v17development-flarum-badges.admin.badge.name"
          )}
          bidi={this.name}
        />
      </div>,
      50
    );

    items.add(
      "icon",
      <div className="Form-group" style="position: relative;">
        <label>
          {app.translator.trans(
            "v17development-flarum-badges.admin.badge.icon"
          )}
          :
        </label>
        <input
          className="FormControl"
          placeholder="fas fa-icons"
          bidi={this.icon}
        />
        <i
          className={this.icon() || "fas fa-icons"}
          style="position: absolute; bottom: 8px; right: 15px; font-size: 20px;"
        />
      </div>,
      50
    );

    items.add(
      "description",
      <div className="Form-group">
        <label>
          {app.translator.trans(
            "v17development-flarum-badges.admin.badge.description"
          )}
          :
        </label>
        <textarea
          className="FormControl"
          placeholder={app.translator.trans(
            "v17development-flarum-badges.admin.badge.description"
          )}
          bidi={this.description}
        />
      </div>,
      50
    );

    // Enabled
    items.add(
      "enabled",
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isVisible() == true,
            onchange: (val) => this.isVisible(val),
          },
          [
            <b>
              {app.translator.trans(
                "v17development-flarum-badges.admin.badge.visible"
              )}
            </b>,
            <div className="helpText">
              {app.translator.trans(
                "v17development-flarum-badges.admin.badge.visible_description"
              )}
            </div>,
          ]
        )}
      </div>,
      50
    );

    items.add(
      "submit",
      <div className="Form-group">
        {Button.component(
          {
            type: "submit",
            className: "Button Button--primary",
            loading: this.loading,
          },
          app.translator.trans("core.forum.composer_edit.submit_button")
        )}
      </div>,
      -10
    );

    return items;
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.badge
      .save({
        name: this.name(),
        icon: this.icon(),
        description: this.description(),
        isVisible: this.isVisible(),
      })
      .then(
        () => this.hide(),
        (response) => {
          this.loading = false;
          this.handleErrors(response);
        }
      );
  }
}
