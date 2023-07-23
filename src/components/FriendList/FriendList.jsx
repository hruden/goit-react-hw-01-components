import { Item, List, Online } from "./FriendList.styled"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) =>{
    return(
        <List>
            {friends.map(({avatar, isOnline, id, name}) => {
                return (
                    <Item key={id}>
                        <Online inrealtime = {true & isOnline}></Online>
                        <img src={avatar} alt="User avatar" width="48" />
                        <p>{name}</p>
                    </Item>    
                )
            })}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}
