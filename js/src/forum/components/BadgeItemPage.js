import Page from "flarum/components/Page";

export default class BadgeItemPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    return (
      <div className="IndexPage">
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              {/* <ul>{listItems(this.sidebarItems().toArray())}</ul> */}
            </nav>
            <div className="IndexPage-results sideNavOffset">
              sfdsdf
            </div>
          </div>
        </div>
      </div>
    );
  }
}
