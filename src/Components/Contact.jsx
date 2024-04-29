import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className=" border-b-2 border-[#1DD100] p-4 space-y-3">
                <h1 data-aos="zoom-in-down" data-aos-delay="500" className="border-l-2 border-[#1DD100] rounded-full text-5xl font-extrabold">Contact Us</h1>
                <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <input data-aos="zoom-in-down" data-aos-delay="1000" className=" p-4 border w-full rounded-lg" type="text" placeholder="name" />
                    <input data-aos="zoom-in-down" data-aos-delay="1500" className=" p-4 border w-full rounded-lg" type="email" placeholder="email" />
                    <input data-aos="zoom-in-down" data-aos-delay="2000" className=" p-4 border w-full rounded-lg" type="number" placeholder="number" />
                    <input data-aos="zoom-in" data-aos-delay="2500" type="submit" className="border w-full rounded-lg  bg-[#1DD100] font-bold" />
                </div>
            </div>
        </div>
    );
};

export default Contact;