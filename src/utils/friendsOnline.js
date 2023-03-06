import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';

export function friendsOnline(isOnline) {
  if (isOnline) {
    return <span className={`${css.status} ${css.online}`}></span>;
  }
  return <span className={`${css.status} ${css.offline}`}></span>;
}
