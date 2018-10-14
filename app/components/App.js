import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default () => {
    return `${Header()}
            ${Content()}
            ${Footer()}`;
}
