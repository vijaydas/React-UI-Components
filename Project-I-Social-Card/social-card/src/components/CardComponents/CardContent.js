import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className = "card-content">
            <p className="card-title">Get Started with React</p>
            <p className="card-copy">React makes it painless to create interactive UIs. Design simle views for each state in your application.</p>
            <p className="card-bottom">reactjs.org</p>
            
        </div>

    );
}

export default CardContent;