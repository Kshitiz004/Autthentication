import React, { useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard  from './src/pages/Dashboard'


const App: React.FC = () => {
    const [role, setRole] = useState<string>('RoleA');


    return (
        <Router>
            <Route path="/">
                <Dashboard role={role} />
            </Route>
        </Router>
    );

}

export default App;