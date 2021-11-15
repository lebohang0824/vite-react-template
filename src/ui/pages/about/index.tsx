import * as React from 'react'
import { Link } from 'react-router-dom';

export const About: React.FC = () => (
    <div>
        <h1>About</h1>
        <Link to="/">Go home</Link>
    </div>
);