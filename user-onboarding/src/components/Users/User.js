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
                <CardText>{`Email: ${user.email}`}</CardText>
                <CardText>{`Password: ${user.password}`}</CardText>
                <CardText>{`Created On: ${new Date(user.createdAt).toLocaleDateString()}`}</CardText>
            </CardBody>
        </Card>
    );
};

export default User;