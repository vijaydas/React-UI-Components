import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle'

//<HeaderTitle />
//<HeaderContent />
//<ImageThumbnail />


function HeaderContainer() {
    return (
        <div className = "header-container">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />

        </div>

    );
}

export default HeaderContainer;