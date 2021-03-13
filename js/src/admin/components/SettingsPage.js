import sortable from "sortablejs";
import ExtensionPage from "flarum/components/ExtensionPage";
import SortableBadge from "./SortableBadge";
import Button from "flarum/components/Button";
import EditBadgeModal from "./EditBadgeModal";

export default class SettingsPage extends ExtensionPage {
  oninit(attrs) {
    super.oninit(attrs);

    this.loading = true;

    this.categories = [];

    this.forcedRefreshKey = 0;

    app.store
      .find("badge_categories", {
        include: "badges",
      })
      .then((badgeCategories) => {
        this.categories = badgeCategories;

        this.loading = false;

        // Redraw
        m.redraw();
      });

    app.store
      .find("badges", {
        uncategorized: true,
      })
      .then(() => {
        this.loading = false;

        // Redraw
        m.redraw();
      });
  }

  content() {
    return (
      <div className="FlarumBadgesPage">
        <Button className={"Button"} key={2}>
          {app.translator.trans(
            "v17development-flarum-badges.admin.create_category"
          )}
        </Button>
        <Button
          className={"Button"}
          key={3}
          onclick={() => app.modal.show(EditBadgeModal)}
        >
          {app.translator.trans("v17development-flarum-badges.admin.new_badge")}
        </Button>

        <div
          className="FlarumBadgeCategories"
          key={this.forcedRefreshKey}
          oncreate={this.onBadgeListReady.bind(this)}
        >
          {this.categories.map((category) => {
            return (
              <div className={"FlarumBadgeCategory"}>
                <div className={"CategoryHeader"}>
                  <span className={"CategoryName"}>
                    {!category.isEnabled() && (
                      <i className={"fas fa-eye-slash"} />
                    )}
                    <b>{category.name()}</b>
                  </span>

                  <span className={"CategoryLinks"}>
                    <a href={"javascript:void(0)"}>Edit category</a>
                    <a href={"javascript:void(0)"}>
                      <i className={"fas fa-caret-up"} />
                    </a>
                    <a href={"javascript:void(0)"}>
                      <i className={"fas fa-caret-down"} />
                    </a>
                    <a href={"javascript:void(0)"}>
                      <i className={"fas fa-trash"} />
                    </a>
                  </span>
                </div>

                <ul className={"SortableBadges"}>
                  {category.badges().map((badge) => (
                    <SortableBadge badge={badge} />
                  ))}
                </ul>
              </div>
            );
          })}

          {/* Uncategorized badges */}
          <div className={"FlarumBadgeCategory"}>
            <div className={"CategoryHeader"}>
              <span className={"CategoryName"}>
                <b>
                  {app.translator.trans(
                    "v17development-flarum-badges.admin.uncategorized"
                  )}
                </b>
              </span>
            </div>

            <ul className={"SortableBadges"}>
              {app.store
                .all("badges")
                .filter((badge) => !badge.category())
                .map((badge) => (
                  <SortableBadge badge={badge} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  onBadgeListReady() {
    this.$(".SortableBadges")
      .get()
      .map((e) => {
        sortable.create(e, {
          group: "tags",
          animation: 150,
          swapThreshold: 0.65,
          dragClass: "SortableBadges-dragging",
          ghostClass: "SortableBadges-placeholder",
          direction: "horizontal",
          onSort: (e) => this.onSortUpdate(e),
        });
      });
  }

  updateCategorySort(id, position) {}

  onSortUpdate(e) {
    console.log(e);

    // this.forcedRefreshKey++;
    // m.redraw();
  }
}
