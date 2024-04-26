import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
            <div className="mb-10">
                <Navbar />
            </div>
            <Outlet></Outlet>
            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default Root;