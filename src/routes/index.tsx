import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

// Landing pages
import { Home } from '../ui/pages/home';
import { About } from '../ui/pages/about';


const Routes = () => {
	return (
		<Router>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Switch>
		</Router>
	);
};

export default Routes;
