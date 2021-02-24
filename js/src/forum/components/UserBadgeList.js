import Component from 'flarum/Component';
import UserBadge from './UserBadge';

export default class UserBadgeList extends Component {
  view() {
    const categories = {};

    this.attrs.user.userBadges().map(userBadge => {
      const categoryId = userBadge.badge().category().id();

      if(!categories[categoryId]) {
        categories[categoryId] = [userBadge];
      }else{
        categories[categoryId].push(userBadge);
      }
    });

    return (
      <div className="UserBadges">
        {Object.keys(categories).length === 0 && (
          <div className={"Placeholder"}>
            <p>This user does not have any badges yet.</p>
          </div>
        )}

        {Object.keys(categories).length >= 1 && (
          Object.keys(categories)
            .map(categoryId => {
              const category = categories[categoryId];

              return (
                <div>
                  <h3>{category[0].badge().category().name()}</h3>
                  {category
                    .sort((a, b) => a.badge().order() - b.badge().order())
                    .map((userBadge) => <UserBadge badge={userBadge.badge()} userBadgeData={userBadge} />)}
                </div>
              )
            })
        )}
      </div>
    );
  }
}