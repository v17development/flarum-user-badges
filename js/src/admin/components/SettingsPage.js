import sortable from "sortablejs";
import ExtensionPage from "flarum/components/ExtensionPage";
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import SortableBadge from "./SortableBadge";
import Button from "flarum/components/Button";
import EditBadgeModal from "./EditBadgeModal";
import EditBadgeCategoryModal from "./EditBadgeCategoryModal";
import ConfirmModal from "./ConfirmModal";

export default class SettingsPage extends ExtensionPage {
  oninit(attrs) {
    super.oninit(attrs);

    this.loading = true;

    this.updating = false;
    this.forcedRefreshKey = 0;

    app.store.find("badge_categories").then(() => {
      app.store.find("badges").then(() => {
        this.loading = false;

        // Redraw
        m.redraw();
      });
    });
  }

  content() {
    const categories = app.store.all("badgeCategories");

    const uncategorizedBadges = app.store
      .all("badges")
      .filter((badge) => badge.category() == false);

    return (
      <div className="FlarumBadgesPage">
        <div className="FlarumBadgePageButtons">
          <Button
            className={"Button"}
            onclick={() => app.modal.show(EditBadgeCategoryModal, {
              onCreate: () => this.nextRefreshKey()
            })}
            icon={"fas fa-project-diagram"}
          >
            {app.translator.trans(
              "v17development-flarum-badges.admin.create_category"
            )}
          </Button>
          <Button
            className={"Button"}
            onclick={() => app.modal.show(EditBadgeModal)}
            icon={"fas fa-icons"}
          >
            {app.translator.trans("v17development-flarum-badges.admin.new_badge")}
          </Button>
        </div>

        <div>
          {!this.loading && (
            <div
              className="FlarumBadgeCategories"
              key={this.forcedRefreshKey}
              oncreate={this.onBadgeListReady.bind(this)}
            >
              {categories && categories.map((category) => {
                return (
                  <div
                    className={"FlarumBadgeCategory"}
                    data-id={category.id()}
                  >
                    <div className={"CategoryHeader"}>
                      <span className={"CategoryName"}>
                        {!category.isEnabled() && (
                          <i className={"fas fa-eye-slash"} />
                        )}
                        <b>{category.name()}</b>
                      </span>

                      <span className={"CategoryLinks"}>
                        <a
                          href={"javascript:void(0)"}
                          onclick={() =>
                            app.modal.show(EditBadgeCategoryModal, {
                              badgeCategory: category,
                            })
                          }
                        >
                          {app.translator.trans(
                            "v17development-flarum-badges.admin.edit_category"
                          )}
                        </a>
                        <a href={"javascript:void(0)"}>
                          <i className={"fas fa-caret-up"} />
                        </a>
                        <a href={"javascript:void(0)"}>
                          <i className={"fas fa-caret-down"} />
                        </a>
                        <a
                          href={"javascript:void(0)"}
                          onclick={() =>
                            app.modal.show(ConfirmModal, {
                              text: app.translator.trans(
                                "v17development-flarum-badges.admin.confirm_messages.delete_category"
                              ),
                              promise: true,
                              onconfirm: (resolve, reject) => {
                                const badges = category.badges();

                                category.delete().then(() => {
                                  resolve();

                                  badges.forEach(badge => 
                                    badge.pushData({
                                      relationships: { 
                                        category: null
                                      }
                                    })
                                  );
                                }).catch(reject);
                              }
                            })
                          }
                        >
                          <i className={"fas fa-trash"} />
                        </a>
                      </span>
                    </div>

                    <ul className={"SortableBadges"}>
                      {category.badges() &&
                        category
                          .badges()
                          .sort((a, b) => a.order() - b.order())
                          .map((badge) => <SortableBadge badge={badge} />)}
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
                  {uncategorizedBadges
                    .sort((a, b) => a.order() - b.order())
                    .map((badge) => (
                      <SortableBadge badge={badge} />
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {this.loading && (
          <LoadingIndicator size={'big'} />
        )}

        {!this.loading && uncategorizedBadges.length === 0 && categories.length === 0 && (
          <p>
            {app.translator.trans(
              "v17development-flarum-badges.admin.nothing_here_yet"
            )}
          </p>
        )}
      </div>
    );
  }

  onBadgeListReady(vnode) {
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

  /**
   * Sort badges
   */
  onSortUpdate() {
    // Skip if already updating
    if (this.updating) return;

    this.updating = true;

    // Get through the categories and find the children currently attached to them
    const order = this.$(".FlarumBadgeCategory")
      .map(function () {
        return {
          id: $(this).data("id") ? $(this).data("id") : null,
          children: $(this)
            .find("li")
            .map(function () {
              return $(this).data("id");
            })
            .get(),
        };
      })
      .get();

    app
      .request({
        url: app.forum.attribute("apiUrl") + "/badges/order",
        method: "POST",
        body: { order },
      })
      .catch((e) => console.error(e))
      .then(() => {
        // Update local store
        order.map(categoryObject => {
          const category = categoryObject.id !== null ? app.store.getById('badgeCategories', categoryObject.id) : null;

          // Loop through the badges
          const badges = categoryObject.children.map((badgeId, badgePosition) => {
            const badge = app.store.getById('badges', badgeId);

            badge.pushData({
              attributes: {
                order: badgePosition
              },
              relationships: { 
                category
              }
            });
      
            return badge;
          });

          // Update the category
          if(category) {
            category.pushData({
              relationships: { 
                badges: {
                  data: badges.map(badge => ({
                    type: 'badges',
                    id: badge.id()
                  }))
                }
               }
            });
          }
        });

        this.updating = false;
        this.nextRefreshKey();
      });
  }

  nextRefreshKey() {
    this.forcedRefreshKey++;
    m.redraw();
  }
}
