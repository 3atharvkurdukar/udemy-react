import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/404.jpg';

const pageNotFound = () => (
    <div>
        <img src={NotFoundImage} style={{ width: 800, display: 'block', margin: 'auto', position: 'relative' }} alt="Error 404: Page Not Found" />
        <h1 style={{textAlign: "center"}}>Error 404: Page Not Found</h1>
        <center><Link to="/posts">Return to Home Page</Link></center>
    </div>
);

export default pageNotFound;