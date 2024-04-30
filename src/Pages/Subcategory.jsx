import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from 'react-helmet-async';
AOS.init();
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Subcategory = () => {
    const art = useLoaderData();
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
            <Helmet>
                <title>Artful Abode | subcategory</title>
            </Helmet>
            {
                art.map(p => <div key={p._id}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-60' src={p.image} alt="Album" /></figure>
                        <div className="card-body">
                            <div className='flex justify-around'>
                                <p data-aos="fade-left" data-aos-duration="1800" className='text-[#1DD100]'>Price: {p.price}</p>
                                <p data-aos="fade-left" data-aos-duration="2000" className='flex items-center text-[#1DD100]'><FaStar></FaStar> {p.rating}</p>
                            </div>
                            <hr className='border-dashed' />
                            <h2 data-aos="fade-left" data-aos-duration="2200" className="card-title">{p.name}</h2>
                            <p data-aos="fade-left" data-aos-duration="2400">{p.subcategory}</p>
                            <div>
                                <button data-aos="zoom-in" data-aos-duration="2500" className="btn btn-sm bg-[#1DD100] w-full">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Subcategory;