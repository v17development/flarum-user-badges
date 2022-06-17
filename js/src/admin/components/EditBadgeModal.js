import Modal from 'flarum/components/Modal';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import Switch from 'flarum/components/Switch';
import Stream from 'flarum/utils/Stream';

export default class EditBadgeModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    // Badge model
    this.badge = this.attrs.badge ? this.attrs.badge : app.store.createRecord('badges');

    // Name
    this.name = Stream(this.badge.name());

    // Is image
    this.isImage = Stream(this.badge.exists ? this.badge.image() !== null : false);

    // Icon
    this.icon = Stream(this.badge.icon());

    // Image
    this.image = Stream(this.badge.image());

    // Description
    this.description = Stream(this.badge.description());

    // Is visible
    this.isVisible = Stream(this.badge.exists ? this.badge.isVisible() : true);

    // Background color
    this.backgroundColor = Stream(this.badge.backgroundColor());

    // Icon color
    this.iconColor = Stream(this.badge.iconColor());

    // Label color
    this.labelColor = Stream(this.badge.labelColor());
  }

  className() {
    return this.isImage() ? 'Modal--small' : 'Modal--large';
  }

  title() {
    return app.translator.trans(`v17development-flarum-badges.admin.${this.badge.exists ? 'update_badge' : 'new_badge'}`);
  }

  content() {
    return [
      <div className="Modal-body">
        <div className="Form">{this.data().toArray()}</div>
      </div>,
      <div className={'Modal-footer'}>
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
        <label>{app.translator.trans('v17development-flarum-badges.admin.badge.name')}:</label>
        <input className="FormControl" placeholder={app.translator.trans('v17development-flarum-badges.admin.badge.name')} bidi={this.name} />
      </div>,
      50
    );

    items.add(
      'description',
      <div className="Form-group">
        <label>{app.translator.trans('v17development-flarum-badges.admin.badge.description')}:</label>
        <textarea
          className="FormControl"
          placeholder={app.translator.trans('v17development-flarum-badges.admin.badge.description')}
          bidi={this.description}
        />
      </div>,
      50
    );

    // Is image
    items.add(
      'is_image',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isImage() == true,
            onchange: (val) => this.isImage(val),
          },
          [
            <b>{app.translator.trans('v17development-flarum-badges.admin.badge.is_image')}</b>,
            <div className="helpText">{app.translator.trans('v17development-flarum-badges.admin.badge.is_image_description')}</div>,
          ]
        )}
      </div>,
      50
    );

    // Image field
    if (this.isImage()) {
      items.add(
        'image',
        <div className="Form-group">
          <label>{app.translator.trans('v17development-flarum-badges.admin.badge.image')}:</label>
          <input
            className="FormControl"
            placeholder={app.translator.trans('v17development-flarum-badges.admin.badge.image_placeholder')}
            bidi={this.image}
          />
        </div>,
        50
      );
    }
    // Non-image fields
    else {
      items.add(
        'icon',
        <div className="Form-group BadgeForm-split BadgeForm-IconField">
          <label>{app.translator.trans('v17development-flarum-badges.admin.badge.icon')}:</label>
          <input className="FormControl" placeholder="fas fa-icons" bidi={this.icon} />
          <span className={this.icon() || 'fas fa-icons '} />
        </div>,
        50
      );

      items.add(
        'icon_color',
        <div className="Form-group BadgeForm-split BadgeForm-ColorField">
          <label>{app.translator.trans('v17development-flarum-badges.admin.badge.icon_color')}:</label>
          <input className="FormControl" placeholder="auto" bidi={this.iconColor} />
          <span
            className={'BadgeForm-Chosen-Color'}
            style={{
              backgroundColor: this.iconColor(),
            }}
          />
        </div>,
        50
      );

      items.add(
        'background_color',
        <div className="Form-group BadgeForm-split BadgeForm-ColorField">
          <label>{app.translator.trans('v17development-flarum-badges.admin.badge.background_color')}:</label>
          <input className="FormControl" bidi={this.backgroundColor} placeholder="auto" />
          <span
            className={'BadgeForm-Chosen-Color'}
            style={{
              backgroundColor: this.backgroundColor(),
            }}
          />
        </div>,
        50
      );

      items.add(
        'label_color',
        <div className="Form-group BadgeForm-split BadgeForm-ColorField">
          <label>{app.translator.trans('v17development-flarum-badges.admin.badge.label_color')}:</label>
          <input className="FormControl" placeholder="auto" bidi={this.labelColor} />
          <span
            className={'BadgeForm-Chosen-Color'}
            style={{
              backgroundColor: this.labelColor(),
            }}
          />
        </div>,
        50
      );
    }

    // Enabled
    items.add(
      'enabled',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isVisible() == true,
            onchange: (val) => this.isVisible(val),
          },
          [
            <b>{app.translator.trans('v17development-flarum-badges.admin.badge.visible')}</b>,
            <div className="helpText">{app.translator.trans('v17development-flarum-badges.admin.badge.visible_description')}</div>,
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

    this.badge
      .save({
        name: this.name(),
        icon: this.icon(),
        image: this.image(),
        description: this.description(),
        isVisible: this.isVisible(),
        iconColor: this.iconColor(),
        backgroundColor: this.backgroundColor(),
        labelColor: this.labelColor(),
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
