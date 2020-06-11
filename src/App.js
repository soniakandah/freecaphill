import React from 'react';
import NavBar from './components/blocks/NavBar';
import Footer from './components/blocks/Footer';
import FrontPage from './components/pages/FrontPage';
import Forum from './components/pages/Forum';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.sass';
import logo from './styles/images/logo.png';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar logo={logo} />
                <Route path='/' exact={true}>
                    <FrontPage />
                </Route>
                <Route path='/forum' exact={true}>
                    <Forum />
                </Route>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
