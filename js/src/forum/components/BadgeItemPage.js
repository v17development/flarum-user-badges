import Page from "flarum/components/Page";

export default class BadgeItemPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
  }

  view() {
    return <p>Badge page</p>;
  }
}
