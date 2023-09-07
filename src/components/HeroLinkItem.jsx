import React from 'react';

const HeroLinkItem = ({link}) => {
    return (
        <div className={link.styles.container}>
            <img src={link.img} alt="link image" />
            <div>
                <h3 className={link.styles.title}>{link.title}</h3>
                <p className={link.styles.subtitle}>{link.subtitle}</p>
            </div>
        </div>
    );
}

export default HeroLinkItem;
