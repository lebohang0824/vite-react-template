import * as React from 'react'
import { Link } from 'react-router-dom';
import { colors, Heading, Text } from '../../theme';

export const About: React.FC = () => (
    <div>
        <Heading 
            color={colors.lightGrey} 
            content="About page" 
            size="big" 
        />

        <Text content="This is some content " />
        
        <Link to="/">Go home</Link>
    </div>
);