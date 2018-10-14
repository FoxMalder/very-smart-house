window.header = {
    visibleNav: false,

    displayNav: (tab) => {
        window.header.visibleNav = !window.header.visibleNav;
        window.selectedTab = tab;
        window.update();
    }
};

window.selectedTab = 'report';

export default () => {
    return `<div class="header">
                <h3 class="header__logo"></h3>
                <div class="header__menu" onclick="header.displayNav()"></div>
                <nav class="header__nav ${header.visibleNav ? 'header__nav_visible' : ''}">
                    <a class="header__nav-item header__nav-item_selected" 
                       href="#" target="_self" onclick="header.displayNav('report')">Сводка</a>
                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav('device')">Устройства</a>
                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav('scenarios')">Сценарии</a>
                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav('video')">Видеонаблюдение</a>
                </nav>
            </div>`
}
