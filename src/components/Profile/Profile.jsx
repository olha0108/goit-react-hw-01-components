import PropTypes from 'prop-types';
import {ProfileUser, ProfileDescription, ProfileAvatar, ProfileName, ProfiletTag, ProfileLocation, ProfileStats, ProfileStatsItem, ProfileLabel, ProfileQuantity} from './Profile.styled';

export const Profile = ({avatar, username, tag, location, stats }) => { return (

<ProfileUser>
  <ProfileDescription>
    <ProfileAvatar
      src={avatar}
      alt={avatar} />
    <ProfileName>{username}</ProfileName>
    <ProfiletTag>@{tag}</ProfiletTag>
    <ProfileLocation>{location}</ProfileLocation>
  </ProfileDescription>

  <ProfileStats>
    <ProfileStatsItem>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuantity>{stats.followers}</ProfileQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuantity>{stats.views}</ProfileQuantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuantity>{stats.likes}</ProfileQuantity>
    </ProfileStatsItem>
  </ProfileStats>
</ProfileUser>)};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};