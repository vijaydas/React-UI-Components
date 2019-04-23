import React from 'react';
import './Header.css';


function HeaderTitle() {
    return (
        <div className = "header-title">
            <p className= "title">Lambda School</p>
            <p className= "at">@LambdaSchool</p>
            <p className= "date">23 April</p>
        </div>
    );
};

export default HeaderTitle;