import { FriendItem } from "./FriendItem";
import {List} from "./FriendList.styled"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) =>{
    return(
        <List>
            {friends.map(({avatar, isOnline, id, name}) => {
                return (
                    <FriendItem key={id} avatar={avatar} isOnline={isOnline} id={id} name={name}/>
                )}
            )}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
