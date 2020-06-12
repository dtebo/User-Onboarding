import React from 'react';

import User from './User';

import './Users.css';

const Users = (props) => {
    if(!props.userList) return <h3>No Users Found</h3>;

    return(
        <div className="users">
            {props.userList.map((user) => {
                return <User key={user.createdAt} user={user} />
            })}
        </div>
    );
};

export default Users;