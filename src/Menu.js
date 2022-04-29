import React from 'react';

const Menu = (props) => {
    console.log(props)
    return (
        <>
            <div>Site name:{props.siteName}</div>
            <div>Version: {props.version}</div>
            <div>Visibility:{props.isPublic? 'Public':'Private'}</div>
            <div>Owner:{props.owner.name} {props.owner.phone}</div>
            <div>Courses:{props.courses}</div>
        </>
    );
};

export default Menu;
