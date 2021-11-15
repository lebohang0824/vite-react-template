import { FC } from 'react';
import Routes from './routes';
import Store from './state/store';
import { StoreProvider } from 'easy-peasy';

const App: FC = () => (
    <StoreProvider store={Store}>
        <Routes />
    </StoreProvider>
)

export default App
