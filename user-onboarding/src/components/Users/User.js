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

    const toTitleCase = (str) => {
        const strArray = str.split("");

        const newArr = strArray.map((c, idx) => {
            if(idx === 0 || idx === str.indexOf(" ") + 1) return c.toUpperCase();

            return c;
        });

        return newArr.join("");
    }

    return(
        <Card className="user">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>{<span>Email: </span>}{`${user.email}`}</CardText>
                <CardText>{<span>Role: </span>}{`${toTitleCase(user.role)}`}</CardText>
                <CardText>{<span>Created On: </span>} {`${new Date(user.createdAt).toLocaleDateString()}`}</CardText>
            </CardBody>
        </Card>
    );
};

export default User;