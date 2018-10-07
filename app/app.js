import pointerEvents from './scripts/pointer-events';
import App from "./components/App";
import './styles/main.less';

let root = document.getElementById('root');

window.update = () => {
    root.innerHTML = App();
};

window.update();

pointerEvents();
