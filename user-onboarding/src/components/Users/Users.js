import React from 'react';

import User from './User';

const Users = (props) => {
    if(!props.userList) return <h3>No Users Found</h3>;

    return(
        <div className="users">
            {props.userList.map((user) => {
                return <User user={user} />
            })}
        </div>
    );
};

export default Users;