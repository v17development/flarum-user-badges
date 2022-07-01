import Notification from 'flarum/forum/components/Notification';

export default class BadgeReceivedNotification extends Notification {
  icon() {
    return '';
  }

  href() {
    return app.route('user.badges', {
      username: app.session.user.username(),
    });
  }

  content() {
    return app.translator.trans('v17development-flarum-badges.forum.notification.title');
  }

  excerpt() {
    const subject = this.attrs.notification.subject();

    return (
      <div>
        <i className={`icon ${subject.badge().icon()}`} />

        {subject.badge().name()}
      </div>
    );
  }
}
