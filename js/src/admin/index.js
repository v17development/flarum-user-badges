import Badge from "../common/models/Badge";
import BadgeCategory from "../common/models/BadgeCategory";
import SettingsPage from "./components/SettingsPage";

app.initializers.add("v17development-user-badges", () => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;

  // Register extension settings page
  app.extensionData.for("v17development-user-badges").registerPage(SettingsPage);

  app.extensionData
    .for("v17development-badges")
    .registerPermission(
      {
        icon: "fas fa-user-tag",
        label: app.translator.trans(
          "v17development-flarum-badges.admin.permissions.give_badge"
        ),
        permission: "badges.giveBadge",
      },
      "moderate",
      90
    )
    .registerPermission(
      {
        icon: "fas fa-user-times",
        label: app.translator.trans(
          "v17development-flarum-badges.admin.permissions.take_badge"
        ),
        permission: "badges.removeBadge",
      },
      "moderate",
      90
    );
});
