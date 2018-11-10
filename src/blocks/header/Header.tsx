import * as React from 'react';
import {NavLink} from "react-router-dom";

let visibleNav = false;

function displayNav () {
    visibleNav = !visibleNav;
}

export const Header = () => (
    <header className="header">
        <h3 className="header__logo"/>
        <div className="header__menu" onClick={displayNav}/>
        <nav className={"header__nav " + (visibleNav ? 'header__nav_visible' : '')}>
            <NavLink className="header__nav-item" activeClassName="header__nav-item_selected" to="/report">Сводка</NavLink>
            <NavLink className="header__nav-item" activeClassName="header__nav-item_selected" to="/device">Устройства</NavLink>
            <NavLink className="header__nav-item" activeClassName="header__nav-item_selected" to="/scenarios">Сценарии</NavLink>
            <NavLink className="header__nav-item" activeClassName="header__nav-item_selected" to="/video">Видеонаблюдение</NavLink>
        </nav>
    </header>
);
