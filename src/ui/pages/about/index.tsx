import * as React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../templates/layout';
import { colors, Heading, Text } from '../../theme';

export const About: React.FC = () => (
    <Layout>
        <Heading 
            color={colors.lightGrey} 
            content="About page" 
            size="normal" 
        />

        <Text content="This is some content " />
        
        <Link to="/">Go home</Link>
    </Layout>
);