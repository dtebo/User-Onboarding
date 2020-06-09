import React from 'react';

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText
} from 'reactstrap';

const User = (props) => {
    const {
        user
    } = props;

    return(
        <Card className="user">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{<span>Email: </span>}{`${user.email}`}</CardText>
                <CardText>{<span>Password: </span>}{`${user.password}`}</CardText>
                <CardText>{<span>Created On: </span>} {`${new Date(user.createdAt).toLocaleDateString()}`}</CardText>
            </CardBody>
        </Card>
    );
};

export default User;