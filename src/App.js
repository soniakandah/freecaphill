import React from 'react';
import NavBar from './components/blocks/NavBar';
import Footer from './components/blocks/Footer';
import FrontPage from './components/pages/FrontPage';
import Forum from './components/pages/Forum';
import Events from './components/pages/Events';
import About from './components/pages/About';
import Contribute from './components/pages/Contribute';
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
                <Route path='/events' exact={true}>
                    <Events />
                </Route>
                <Route path='/forum' exact={true}>
                    <Forum />
                </Route>
                <Route path='/about' exact={true}>
                    <About />
                </Route>
                <Route path='/contribute' exact={true}>
                    <Contribute />
                </Route>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
