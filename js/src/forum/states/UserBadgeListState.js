import PaginatedListState from "flarum/common/states/PaginatedListState";

export default class UserBadgeListState extends PaginatedListState {
  constructor() {
    super({}, 1, 18);

    this.pageSize = 18;
  }

  get type() {
    return "user_badges";
  }
}
