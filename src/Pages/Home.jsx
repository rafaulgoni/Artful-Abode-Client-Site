import Discount from "../Components/Discount";
import Slider from "../Components/slider/Slider";
import SliderInfo from "../Components/slider/SliderInfo";


const Home = () => {
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
        </div>
    );
};

export default Home;