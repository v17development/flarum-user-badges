import Component from "flarum/common/Component";
import Link from "flarum/components/Link";

export default class TableView extends Component {
  view() {
    if (!this.attrs.badges) {
      return null;
    }

    const badges = this.attrs.badges;

    return (
      <table width={"100%"} className={"BadgeTable"}>
        <thead>
          <tr>
            <th scope="col">
              {app.translator.trans(
                "v17development-flarum-badges.forum.badge.badges"
              )}
            </th>
            <th scope="col">
              {app.translator.trans(
                "v17development-flarum-badges.forum.badge.description"
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {badges.map((badge) => {
            return (
              <tr>
                <td>
                  <Link
                    href={app.route("badges.item", { id: badge.id() })}
                    className="UserBadge"
                  >
                    <i className={badge.icon()} /> {badge.name()}
                  </Link>
                </td>
                <td>
                  {badge.description()}

                  <div className={"BadgeTableRewarded"}>
                    {app.translator.trans(
                      "v17development-flarum-badges.forum.badge.earned_count",
                      {
                        count: badge.earnedAmount(),
                      }
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
