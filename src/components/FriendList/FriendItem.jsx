import { Item, Online } from "./FriendList.styled"
import PropTypes from 'prop-types';

export const FriendItem = ({avatar, isOnline, id, name}) => {
    return (
        <Item id={id}>
            <Online inrealtime = {true & isOnline}></Online>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Item>    
    )
}

FriendItem.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
}