import React from 'react';
import { NavLink } from "react-router-dom";

export default function Categories() {
    return (
        <nav className="navigation">
            <div className="wrapper">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <NavLink exact to="/" activeClassName="navigation__link--active" className="navigation__link">All</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact to="/public" activeClassName="navigation__link--active" className="navigation__link">Public</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact to="/private" activeClassName="navigation__link--active" className="navigation__link">Private</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact to="/sources" activeClassName="navigation__link--active" className="navigation__link">Sources</NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink exact to="/forks" activeClassName="navigation__link--active" className="navigation__link">Forks</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
