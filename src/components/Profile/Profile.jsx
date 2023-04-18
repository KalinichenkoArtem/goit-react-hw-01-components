import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  TagName,
  Location,
  StatusList,
  StatusItem,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </Description>

      <StatusList>
        <StatusItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatusItem>
      </StatusList>
    </Container>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
