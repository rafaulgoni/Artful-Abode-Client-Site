import { useLoaderData } from "react-router-dom";
import AllCraftShow from "./AllShow/AllCraftShow";


const AllCraftItems = () => {
    const showUserCart = useLoaderData();
    return (
        <div className="container mx-auto space-y-3">
            <h1 className="text-4xl text-center font-bold" style={{
                "border-radius": "88px 88px 0px 0px"
                , "border-top": "2px solid var(--primary-700, #1DD100)"
            }}>All Craft Items</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    showUserCart.map(allCard => <AllCraftShow
                        key={allCard._id}
                        allCard={allCard}>
                    </AllCraftShow>)
                }
            </div>
        </div>
    );
};

export default AllCraftItems;