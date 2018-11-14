import * as React from 'react';
import {NavLink} from "react-router-dom";

export class Header extends React.Component {
    private visibleNav: boolean;

    constructor (visibleNav: boolean) {
        super(visibleNav);
        this.visibleNav = visibleNav;
    }

    displayNav() {
        this.visibleNav = !this.visibleNav;
    }

    render() {
        return (
            <header className="header">
                <h3 className="header__logo"/>
                <div className="header__menu" onClick={this.displayNav}/>
                <nav className={"header__nav " + (this.visibleNav ? 'header__nav_visible' : '')}>
                    <NavLink className="header__nav-item" activeClassName="header__nav-item_selected"
                             to="/report">Сводка</NavLink>
                    <NavLink className="header__nav-item" activeClassName="header__nav-item_selected"
                             to="/device">Устройства</NavLink>
                    <NavLink className="header__nav-item" activeClassName="header__nav-item_selected"
                             to="/scenarios">Сценарии</NavLink>
                    <NavLink className="header__nav-item" activeClassName="header__nav-item_selected"
                             to="/video">Видеонаблюдение</NavLink>
                </nav>
            </header>
        )
    }
}
