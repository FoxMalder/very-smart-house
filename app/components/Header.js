window.header = {
    visibleNav: false,

    displayNav: () => {
        window.header.visibleNav = !window.header.visibleNav;
        window.update();
    }
};

export default () => {
    return `<div class="header">
                <h3 class="header__logo"></h3>
                <div class="header__menu" onclick="header.displayNav()"></div>
                <nav class="header__nav ${header.visibleNav ? 'header__nav_visible' : ''}">
                    <a class="header__nav-item header__nav-item_selected" href="#" target="_self" onclick="header.displayNav()">Сводка</a>
                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav()">Устройства</a>
                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav()">Сценарии</a>
                </nav>
            </div>`
}
