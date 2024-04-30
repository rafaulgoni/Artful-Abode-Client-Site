import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";


const Details = () => {
    const [detail, setDetail] = useState({})
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/art/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [id])
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Artful Abode | Details</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-[800px] max-h-[400px]"><img src={detail.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-3xl">{detail.name}</h2>
                    <p className='font-bold text-xl'>{detail.subcategory}</p>
                    <p><span className='font-bold text-xl'>Description:</span> <samp className="font-bold">{detail.description}</samp></p>
                    <hr className=' border-dashed' />
                    <p className='flex items-center gap-2 text-[#1DD100]'><FaStar></FaStar>{detail.rating}</p>
                    <div className=' flex gap-4'>
                        <p className='text-lg text-[#1DD100]'><span className='font-bold'>Status:</span>{detail.
                            status} </p>
                        <p className='text-lg text-[#1DD100]'><span className='font-bold'>Price:</span> {detail.price}</p>
                    </div>
                    <hr className=' border-dashed' />
                    <p><span className='font-bold text-xl'>customization:</span><span className='font-bold'>{detail.customization}</span></p>
                    <p><span className='font-bold text-xl'>Processing time:</span> <span className='font-bold'>{detail.time}</span></p>
                    <div className="card-actions">
                        <Link to='/' className="btn bg-[#1DD100] btn-sm w-full">Buy Panting</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;