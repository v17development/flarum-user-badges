export default function categorizeUserBadges(user) {
  const categories = {};
  const uncategorized = [];

  user.userBadges().map((userBadge) => {
    if (!userBadge) return null;

    // Categorized
    if (userBadge.badge().category()) {
      const category = userBadge.badge().category();

      if (!categories[category.id()]) {
        categories[category.id()] = {
          name: category.name(),
          category,
          badges: [userBadge],
        };
      } else {
        categories[category.id()].badges.push(userBadge);
      }
    }
    // Uncategorized
    else {
      uncategorized.push(userBadge);
    }
  });

  // Sort categories and map them into an array
  let sortedCategories = Object.keys(categories)
    .sort((a, b) => categories[a].category.order() - categories[b].category.order())
    .map((category) => categories[category]);

  // Add uncategorized category to list
  if (uncategorized.length >= 1) {
    sortedCategories.push({
      name: app.translator.trans('v17development-flarum-badges.forum.uncategorized'),
      category: null,
      badges: uncategorized,
    });
  }

  return sortedCategories;
}
