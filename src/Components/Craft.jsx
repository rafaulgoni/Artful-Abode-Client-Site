import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
AOS.init();

const Craft = () => {
    const [display, setDisplay] = useState([])

    fetch('https://b9a10-server-side-rafaulgoni.vercel.app/user')
        .then(res => res.json())
        .then(data => {
            setDisplay(data)
        })
    const craft = display.slice(1, 7)
    return (
        <div className="container mx-auto">
            {
                craft.map(i => <div key={i._id}>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div data-aos="fade-left" data-aos-duration="500" className="avatar">
                                                    <div className="mask mask-squircle w-24 h-24">
                                                        <img src={i.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div data-aos="fade-left" data-aos-delay="1000">
                                                    <div className="font-bold">{i.name}</div>
                                                    <div className="text-sm opacity-50">{i.subcategory}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-aos="fade-left" data-aos-delay="1500" className='text-[#1DD100]'>
                                            {i.price}
                                            <br />
                                            <span className='badge badge-ghost badge-sm'>Customization: {i.customization}</span>
                                        </td>
                                        <td data-aos="fade-left" data-aos-delay="2000">
                                            <p className='flex items-center text-[#1DD100]'><FaStar></FaStar> {i.rating}</p>
                                        </td>
                                        <th>
                                            <Link to={"/subcategory"} data-aos="zoom-in" data-aos-delay="2500" className="btn btn-sm bg-[#1DD100] w-full">View Subcategory</Link>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Craft;