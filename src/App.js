import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Search} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
