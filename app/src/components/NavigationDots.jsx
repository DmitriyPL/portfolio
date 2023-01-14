import React from 'react';

import { appData } from "../data";
const navbarItems = appData.navbarItems;

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {navbarItems.map( (item, index) =>
                <a 
                    key={item + index}
                    href={`#${item}`}
                    className="app__navigation-dot"
                    style={ active === item ? { backgroundColor: '#313BAC' } : { } }
                />
            )}    
        </div>
    );
}

export default NavigationDots;
