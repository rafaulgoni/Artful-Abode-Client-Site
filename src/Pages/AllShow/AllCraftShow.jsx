import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllCraftShow = ({ allCard }) => {
    const { image, name, price, rating, subcategory, _id } = allCard
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-80 h-60' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <div className='flex justify-around'>
                        <p className='text-[#1DD100]'>Price: {price}</p>
                        <p className='flex items-center text-[#1DD100]'><FaStar></FaStar> {rating}</p>
                    </div>
                    <hr className='border-dashed' />
                    <h2 className="card-title">{name}</h2>
                    <p>{subcategory}</p>
                    <div>
                        <Link to={`/allShow/${_id}`} className="btn btn-sm bg-[#1DD100] w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCraftShow;
