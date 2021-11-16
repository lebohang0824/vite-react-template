import { useStoreState } from 'easy-peasy';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { colors, Heading } from '../../theme';

/* Components */

/* Interfaces */
import IUser from '../../../state/models/user-model/IUser';


export const Home: React.FC = () => {

    const user: IUser = useStoreState((store: any) => store.User);
    
    return (
        <div>
            <Heading 
                color={colors.lightGrey} 
                content="Home page"
                size="normal" 
            />

            <ul>
                <li style={{ color: colors.grey }}>{ user.firstname }</li>
            </ul>

            <Link to="/about">Go to about</Link>
        </div>
    );
}