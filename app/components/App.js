import Header from "./Header";
import Cards from "./Cards";
import Footer from "./Footer";

export default () => {
    return `${Header()}
            ${Cards()}
            ${Footer()}`;
}
