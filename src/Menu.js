import React from 'react';
import Logo from "./Logo";

const Menu = (props) => {
    console.log(props)
    const buyCourse = (id) =>{
        console.log('buy course',id)
    }
    return (
        <>
            <div>Site name:{props.siteName}</div>

            <div>Version: {props.version}</div>
            <div>Visibility:{props.isPublic? 'Public':'Private'}</div>
            <div>Owner:{props.owner.name} {props.owner.phone}</div>
            <div>Courses:</div>
            <ul>
                {props.courses.map(el => (
                    <li key={el.id}>
                    <strong>{el.title}</strong>, Price:${el.price}
                        <Logo siteName={props.siteName}/>
                        <button onClick={() => buyCourse(el.id)}>Buy</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Menu;
