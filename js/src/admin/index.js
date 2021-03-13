import Badge from "../common/models/Badge";
import BadgeCategory from "../common/models/BadgeCategory";
import SettingsPage from "./components/SettingsPage";

app.initializers.add("v17development-badges", () => {
  app.store.models.badges = Badge;
  app.store.models.badgeCategories = BadgeCategory;

  // Register extension settings page
  app.extensionData.for("v17development-badges").registerPage(SettingsPage);
});
