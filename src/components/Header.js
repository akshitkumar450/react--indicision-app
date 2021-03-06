import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <div className="center">
                <h1 className="header__title">{props.title} </h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
        </div>
    )
}

// default props 
Header.defaultProps = {
    title: 'deafult prop:Indecision'
};

export default Header