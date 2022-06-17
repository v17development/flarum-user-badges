import Modal from 'flarum/components/Modal';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';
import Stream from 'flarum/utils/Stream';

export default class EditBadgeCategoryModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    // Badge model
    this.badgeCategory = this.attrs.badgeCategory ? this.attrs.badgeCategory : app.store.createRecord('badgeCategories');

    // Name
    this.name = Stream(this.badgeCategory.name());

    // Description
    this.description = Stream(this.badgeCategory.description());

    // Is enabled
    this.isTable = Stream(this.badgeCategory.exists ? this.badgeCategory.isTable() : true);

    // Is enabled
    this.isEnabled = Stream(this.badgeCategory.exists ? this.badgeCategory.isEnabled() : true);
  }

  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans(`v17development-flarum-badges.admin.${this.badgeCategory.exists ? 'update_category' : 'create_category'}`);
  }

  content() {
    return [
      <div className="Modal-body">
        <div className="Form">{this.data().toArray()}</div>
      </div>,
      <div className="Modal-footer">
        {Button.component(
          {
            type: 'submit',
            className: 'Button Button--primary',
            loading: this.loading,
          },
          app.translator.trans('core.admin.settings.submit_button')
        )}
      </div>,
    ];
  }

  data() {
    const items = new ItemList();

    items.add(
      'name',
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-badges.admin.badge_category.name')}:</label>
        <input
          className="FormControl"
          placeholder={app.translator.trans('v17development-flarum-badges.admin.badge_category.name')}
          bidi={this.name}
        />
      </div>,
      50
    );

    items.add(
      'description',
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-badges.admin.badge_category.description')}:</label>
        <textarea
          className="FormControl"
          placeholder={app.translator.trans('v17development-flarum-badges.admin.badge_category.description')}
          bidi={this.description}
        />
      </div>,
      50
    );

    // Enabled
    items.add(
      'blockview',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isTable() === false,
            onchange: (val) => this.isTable(!val),
          },
          [
            <b>{app.translator.trans('v17development-flarum-badges.admin.badge_category.blockview')}</b>,
            <div className="helpText">{app.translator.trans('v17development-flarum-badges.admin.badge_category.blockview_description')}</div>,
          ]
        )}
      </div>,
      50
    );

    // Enabled
    items.add(
      'enabled',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isEnabled() == true,
            onchange: (val) => this.isEnabled(val),
          },
          [
            <b>{app.translator.trans('v17development-flarum-badges.admin.badge_category.enabled')}</b>,
            <div className="helpText">{app.translator.trans('v17development-flarum-badges.admin.badge_category.enabled_description')}</div>,
          ]
        )}
      </div>,
      50
    );

    return items;
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.badgeCategory
      .save({
        name: this.name(),
        description: this.description(),
        isTable: this.isTable(),
        isEnabled: this.isEnabled(),
      })
      .then(
        () => {
          this.hide();

          if (this.attrs.onCreate) {
            this.attrs.onCreate();
          }
        },
        (response) => {
          this.loading = false;
          this.handleErrors(response);
        }
      );
  }
}
