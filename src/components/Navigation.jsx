import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" exact className="hover" activeClassName="nav-active">
                    <li>Accueil</li>
                </NavLink>

                <li className="nav-apropos">A Propos
                    <ul className="nav-projects">

                        <NavLink to="/Services" activeClassName="nav-active" className="hover">
                            <li>Service</li>
                        </NavLink>

                        <NavLink to="/vision" activeClassName="nav-active" className="hover">
                            <li>Vision</li>
                        </NavLink>

                        <NavLink to="/strategie" activeClassName="nav-active" className="hover">
                            <li>Stratégie</li>
                        </NavLink>

                        <NavLink to="/ecosysteme" activeClassName="nav-active" className="hover">
                            <li>Ecosystème</li>
                        </NavLink>
                    </ul>
                </li>
                <NavLink to="/contact" exact className="hover" activeClassName="nav-active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    )
}
