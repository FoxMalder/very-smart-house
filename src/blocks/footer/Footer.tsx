import * as React from 'react';
import {NavLink} from "react-router-dom";

export const Footer = () => (
    <footer className="footer">
        <nav className="footer__nav">
            <NavLink className="footer__nav-item" to="#">Помощь</NavLink>
            <NavLink className="footer__nav-item" to="#">Обратная связь</NavLink>
            <NavLink className="footer__nav-item" to="#">Разработчикам</NavLink>
            <NavLink className="footer__nav-item" to="#">Условия использования</NavLink>
            <NavLink className="footer__nav-item"
               to="https://docviewer.yandex.ru/view/1130000031416131/?*=tyRHkLnnH5CEuwvTqHisSEf1HNR7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMzEiLCJ5dSI6IjQ3NjMxNTI1NjE1MTE1NTQxMDYiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODk0MjU0NTcyfQ%3D%3D"
               target="_blank" rel="nofollow noopener">Авторские права</NavLink>
        </nav>
        <div className="footer__logo">© 2001–2017 ООО «Яндекс»</div>
    </footer>
);
