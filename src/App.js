import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Service, Vision, Strategie, Ecosystem } from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Services" element={<Service/>} />
            <Route exact path="/vision" element={<Vision/>} />
            <Route exact path="/strategie" element={<Strategie/>} />
            <Route exact path="/ecosysteme" element={<Ecosystem/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/*" element={<NotFound/>} />
        </Routes>
    );
};

export default App;