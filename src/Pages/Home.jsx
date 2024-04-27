import { useLoaderData } from "react-router-dom";
import Discount from "../Components/Discount";
import Slider from "../Components/slider/Slider";
import SliderInfo from "../Components/slider/SliderInfo";
import ArtCard from "../Components/Art/ArtCard";
import Contact from "../Components/Contact";
import Agents from "../Components/Agents";

const Home = () => {
    const showArt = useLoaderData();
    return (
        <div>
            <div className="container mx-auto relative">
                <Slider></Slider>
                <div className="absolute top-[90px] lg:left-8 z-10">
                    <SliderInfo></SliderInfo>
                </div>
            </div>
            <div className="mt-10">
                <Discount></Discount>
            </div>
            <div className="mt-10 space-y-6 container mx-auto">
                <h1 className="text-4xl text-center font-bold" style={{
                    "border-radius": "88px 88px 0px 0px"
                    , "border-top": "2px solid var(--primary-700, #1DD100)"
                }}>Craft Items Section</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        showArt.map(six => <ArtCard
                            key={six._id}
                            card={six}
                        >
                        </ArtCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Contact></Contact>
            </div>
            <div className="mt-10">
                <Agents></Agents>
            </div>
        </div>
    );
};

export default Home;