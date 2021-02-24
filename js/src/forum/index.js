import { extend } from "flarum/extend";
import Model from "flarum/Model";
import User from "flarum/models/User";
import UserPage from "flarum/components/UserPage";
import UserControls from "flarum/utils/UserControls";
import LinkButton from "flarum/components/LinkButton";
import Button from "flarum/components/Button";
import Badge from "../common/models/Badge";
import BadgeCategory from "../common/models/BadgeCategory";
import UserBadge from "../common/models/UserBadge";
import BadgesProfilePage from "./components/BadgesProfilePage";
import BadgesOverviewPage from "./components/BadgesOverviewPage";
import BadgeItemPage from "./components/BadgeItemPage";
import GiveBadgeModal from "./components/GiveBadgeModal";

app.initializers.add("v17development-flarum-badges", (app) => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;
  app.store.models.userBadges = UserBadge;

  User.prototype.userBadges = Model.hasMany("userBadges");
  User.prototype.userPrimaryBadge = Model.hasOne("userPrimaryBadge");

  // Add user badges to the user profile
  app.routes["user.badges"] = {
    path: "/u/:username/badges",
    component: BadgesProfilePage,
  };

  // Future
  // // Badges overview page
  // app.routes["badges"] = {
  //   path: "/badges",
  //   component: BadgesOverviewPage,
  // };

  // // Badges overview page
  // app.routes["badges.category"] = {
  //   path: "/badges/category/:id",
  //   component: BadgesOverviewPage,
  // };

  // // Badge item page
  // app.routes["badges.item"] = {
  //   path: "/badges/:id",
  //   component: BadgeItemPage,
  // };

  // Add uploads to user page menu items
  extend(UserPage.prototype, "navItems", function (items) {
    items.add(
      "badges",
      LinkButton.component(
        {
          href: app.route("user.badges", {
            username: this.user.username(),
          }),
          name: "badges",
          icon: "fas fa-user-tag",
        },
        [
          app.translator.trans(
            "v17development-flarum-badges.forum.badge.badges"
          ),
          <span className="Button-badge">{this.user.userBadges().length}</span>,
        ]
      ),
      90
    );
  });

  extend(UserControls, 'moderationControls', function(items, user) {
    // User can give badges
    if(app.forum.attribute("canGiveBadge")) {
      items.add(
        'test',
        <Button 
          icon="fas fa-user-tag" 
          onclick={() => 
            app.modal.show(GiveBadgeModal, {
              user: user
            }
          )}
          >
          {app.translator.trans('v17development-flarum-badges.forum.give_badge')}
        </Button>
      );
    }
  });
});
