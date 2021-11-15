import { useStoreState } from 'easy-peasy';
import * as React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { Title } from './styles';

/* Interfaces */
import IUser from '../../../state/models/user-model/IUser';


export const Home: React.FC = () => {

    const user: IUser = useStoreState((store: any) => store.User);
    
    return (
        <div>
            <Title>Home</Title>
            <ul>
                <li>{ user.firstname }</li>
                <li>{ user.lastname }</li>
                <li>{ user.accessToken }</li>
            </ul>
            <Link to="/about">Go to about</Link>
        </div>
    );
}