import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const FullWidthLayouts = () => {
    return (
        <div className="h-svh">
            <header>
                <Header></Header>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default FullWidthLayouts;