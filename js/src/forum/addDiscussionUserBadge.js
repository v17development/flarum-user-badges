import { extend } from 'flarum/extend';
import CommentPost from 'flarum/common/components/CommentPost';
import BadgeModal from './components/BadgeModal';
import UserBadge from '../common/components/UserBadge';

export default function addDiscussionUserBadge() {
  extend(CommentPost.prototype, 'content', function(list){
    const userID = this.attrs.post.data.relationships.user.data.id;
    const user = this.attrs.post.store.data.users[userID];
    const userBadges = user.userBadges() ?? [];
    const limit = app.forum.attribute('numberOfBadgesOnUserCard');
    let visibleBadges = userBadges.filter((userBadge) => {});

    if (visibleBadges.length === 0) {
      visibleBadges = userBadges.slice(0, limit);
    }

    const badges = visibleBadges.map((userBadge) => {
      return (
        <UserBadge
          badge={userBadge.badge()}
          onclick={() =>
            app.modal.show(BadgeModal, {
              badge: userBadge.badge(),
              userBadgeData: userBadge,
            })
          }
        />
      );
    });

    if(badges.length>0){
      list[0].children.push(<div style="height:15px"></div>);
      for(let i=0;i<badges.length;i++){
        list[0].children.push(badges[i]);
      }
    }
  });
}
