import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const AllCraftItems = () => {
    const showUserCart = useLoaderData();
    return (
        <div className="container mx-auto space-y-3">
            <h1 className="text-4xl text-center font-bold" style={{
                "border-radius": "88px 88px 0px 0px"
                , "border-top": "2px solid var(--primary-700, #1DD100)"
            }}>All Craft Items</h1>
            <div className="gap-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Select
                                </th>
                                <th>Image / Craft name</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Details button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showUserCart.map(allCard => <tr key={allCard._id}>
                                    <th>
                                        <label>
                                            <input data-aos="fade-left" data-aos-delay="500" type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div data-aos="fade-left" data-aos-delay="1000" className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={allCard.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div data-aos="fade-left" data-aos-delay="1500">
                                                <div className="font-bold">{allCard.name}</div>
                                                <div className="text-sm opacity-50">{allCard.subcategory}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-aos="fade-left" data-aos-delay="2000">
                                        {allCard.displayName || "Mr. Anim"}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{allCard.email || "mr.anim77@gmail.com"}</span>
                                    </td>
                                    <td data-aos="fade-left" data-aos-delay="2400">
                                        <p className='text-[#1DD100]'>{allCard.price}</p>
                                    </td>
                                    <td data-aos="fade-left" data-aos-delay="2700">
                                        <p className='flex items-center text-[#1DD100]'><FaStar></FaStar> {allCard.rating}</p>
                                    </td>
                                    <th>
                                        <Link to={`/allShow/${allCard._id}`} data-aos="zoom-in" data-aos-delay="3000" className="btn btn-sm bg-[#1DD100]">View Details</Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCraftItems;