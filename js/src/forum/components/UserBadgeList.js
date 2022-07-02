import Component from 'flarum/common/Component';
import UserBadge from '../../common/components/UserBadge';
import categorizeUserBadges from '../utils/categorizeUserBadges';
import BadgeModal from './BadgeModal';

export default class UserBadgeList extends Component {
  view() {
    const categories = categorizeUserBadges(this.attrs.user);

    return (
      <div className="UserBadges">
        {categories.length === 0 && (
          <div className={'Placeholder'}>
            <p>{app.translator.trans('v17development-flarum-badges.forum.user_no_badges')}</p>
          </div>
        )}

        {categories.length >= 1 &&
          categories.map(({ name, category, badges }) => {
            if (category && !category.isEnabled()) return null;

            return (
              <div className={'UserBadgesCategory'}>
                <h3>{name}</h3>

                {category && category.description() && <p>{category.description()}</p>}

                {badges
                  .sort((a, b) => a.badge().order() - b.badge().order())
                  .map((userBadge) => (
                    <UserBadge
                      badge={userBadge.badge()}
                      onclick={() =>
                        app.modal.show(BadgeModal, {
                          badge: userBadge.badge(),
                          userBadgeData: userBadge,
                        })
                      }
                    />
                  ))}
              </div>
            );
          })}
      </div>
    );
  }
}
