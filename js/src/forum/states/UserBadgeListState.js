import PaginatedListState from 'flarum/common/states/PaginatedListState';

export default class UserBadgeListState extends PaginatedListState {
  constructor(params, page = 1) {
    super(params, page, 18);
  }

  get type() {
    return 'user_badges';
  }
}
