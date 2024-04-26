import { FaHome } from "react-icons/fa";

const SliderInfo = () => {
    return (
        <div>
            <div className="card mx-auto">
                <div className="card-body mx-auto">
                    <p data-aos="fade-right" data-aos-duration="1000" className="flex items-center font-bold lg:w-80 text-white"><span className="text-[#1DD100]">
                        <FaHome className="mr-2"></FaHome>
                        </span> Artful Abode </p>
                    <h2 data-aos="fade-left" data-aos-delay="1500" className=" text-3xl font-bold lg:w-80 text-white">Find Your Dream Painting By Us</h2>
                    <p data-aos="fade-right" data-aos-delay="2000" className=" border-l-2 border-[#1DD100] lg:w-96 text-white">In the luxury Landscape Painting market, exclusivity, privacy, and bespoke features are paramount, catering to the tastes and lifestyles of affluent buyers seeking unparalleled living experiences.</p>
                    <button data-aos="zoom-in" data-aos-delay="2200" className="btn text-white bg-[#1DD100] font-bold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SliderInfo;