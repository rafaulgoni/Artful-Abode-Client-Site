import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ArtCard = ({ card }) => {
    const { image, name, price, rating, subcategory, _id } = card
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img data-aos="zoom-in" data-aos-duration="1500" className='w-80 h-60' src={image} alt="Album" /></figure>
            <div className="card-body">
                <div className='flex justify-around'>
                    <p data-aos="fade-left" data-aos-duration="1800" className='text-[#1DD100]'>Price: {price}</p>
                    <p data-aos="fade-left" data-aos-duration="2000" className='flex items-center text-[#1DD100]'><FaStar></FaStar> {rating}</p>
                </div>
                <hr className='border-dashed'/>
                <h2 data-aos="fade-left" data-aos-duration="2200" className="card-title">{name}</h2>
                <p data-aos="fade-left" data-aos-duration="2400">{subcategory}</p>
                <div>
                    <Link to={`/details/${_id}`} data-aos="zoom-in" data-aos-duration="2500" className="btn btn-sm bg-[#1DD100] w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;
ArtCard.propTypes = {
    card: PropTypes.node
}