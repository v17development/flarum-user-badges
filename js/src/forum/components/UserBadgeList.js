import Component from "flarum/common/Component";
import UserBadge from "./UserBadge";

export default class UserBadgeList extends Component {
  view() {
    const categories = {};
    const uncategorized = [];

    this.attrs.user.userBadges().map((userBadge) => {
      if (!userBadge) return null;

      // Categorized
      if(userBadge.badge().category()) {
        const category = userBadge.badge().category();

        if (!categories[category.id()]) {
          categories[category.id()] = {
            category,
            badges: [userBadge],
          };
        } else {
          categories[category.id()].badges.push(userBadge);
        }
      }
      // Uncategorized
      else{
        uncategorized.push(userBadge);
      }
    });

    return (
      <div className="UserBadges">
        {Object.keys(categories).length === 0 && (
          <div className={"Placeholder"}>
            <p>
              {app.translator.trans(
                "v17development-flarum-badges.forum.user_no_badges"
              )}
            </p>
          </div>
        )}

        {Object.keys(categories).length >= 1 &&
          Object.keys(categories)
            .sort(
              (a, b) =>
                categories[a].category.order() - categories[b].category.order()
            )
            .map((id) => {
              const category = categories[id].category;
              const badges = categories[id].badges;

              if (!category.isEnabled()) return null;

              return (
                <div className={"UserBadgesCategory"}>
                  <h3>{category.name()}</h3>

                  {category.description() && <p>{category.description()}</p>}

                  {badges
                    .sort((a, b) => a.badge().order() - b.badge().order())
                    .map((userBadge) => (
                      <UserBadge
                        badge={userBadge.badge()}
                        userBadgeData={userBadge}
                      />
                    ))}
                </div>
              );
            })}

        {/* Uncategorized badges */}
        {uncategorized.length >= 1 && (
          <div className={"UserBadgesCategory"}>
            <h3>
              {app.translator.trans(
                "v17development-flarum-badges.forum.uncategorized"
              )}
            </h3>

            {uncategorized
              .sort((a, b) => a.badge().order() - b.badge().order())
              .map((userBadge) => (
                <UserBadge
                  badge={userBadge.badge()}
                  userBadgeData={userBadge}
                />
              ))}
          </div>
        )}
      </div>
    );
  }
}
