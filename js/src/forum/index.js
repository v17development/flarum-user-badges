import { extend } from "flarum/extend";
import Model from "flarum/Model";
import User from "flarum/models/User";
import UserPage from "flarum/components/UserPage";
import LinkButton from "flarum/components/LinkButton";
import Badge from "../common/models/Badge";
import BadgeCategory from "../common/models/BadgeCategory";
import UserBadge from "../common/models/UserBadge";
import BadgesProfilePage from "./components/BadgesProfilePage";
import BadgesOverviewPage from "./components/BadgesOverviewPage";
import BadgeItemPage from "./components/BadgeItemPage";

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

  // Badges overview page
  app.routes["badges"] = {
    path: "/badges",
    component: BadgesOverviewPage,
  };

  // Badges overview page
  app.routes["badges.category"] = {
    path: "/badges/category/:id",
    component: BadgesOverviewPage,
  };

  // Badge item page
  app.routes["badges.item"] = {
    path: "/badges/:id",
    component: BadgeItemPage,
  };

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
        app.translator.trans("v17development-flarum-badges.forum.badge.badges")
      ),
      90
    );
  });
});
