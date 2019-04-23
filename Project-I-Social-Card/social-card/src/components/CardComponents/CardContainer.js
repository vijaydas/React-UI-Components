import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';



function CardContainer() {
    return (
    <div className ="card-container" onClick="window.location.href='https://www.reactjs.org';">
    <CardBanner />
    <CardContent />
    
    </div>
    );
}

export default CardContainer;