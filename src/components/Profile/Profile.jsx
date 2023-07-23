import { Avatar, Container, Description, Label, Name, Stats, Tag } from "./Profile.styled"
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return (
      <Container>
        <Description>
          <Avatar 
            width={150}
            height={150}
            src={avatar}
            alt="User avatar"
          />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Tag>{location}</Tag>
        </Description>

        <Stats>
          <Label>
            <span>Followers</span>
            <span>{followers}</span>
          </Label>
          <Label>
            <span>Views</span>
            <span>{views}</span>
          </Label>
          <Label>
            <span>Likes</span>
            <span>{likes}</span>
          </Label>
        </Stats>
      </Container>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};