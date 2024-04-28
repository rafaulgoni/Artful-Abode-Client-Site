import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import { useState } from "react";



const MyCraftList = () => {
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([])
    fetch(`http://localhost:5000/data/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setItem(data)
        })
    return (
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
            {
                item.map(p =><div key={p._id}><div className="card bg-base-100 shadow-xl">
                <figure className="max-h-[300px]"><img src={p.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                   {p.name}
                    <div className="badge bg-[#1DD100]">NEW</div>
                  </h2>
                  <p>{p.subcategory}</p>
                  <div className="card-actions justify-end">
                    <div className="btn btn-sm outline outline-red-600">Delate</div> 
                    <div className="btn btn-sm outline outline-[#1DD100]">Update</div>
                  </div>
                </div>
              </div></div>)
            }
        </div>
    );
};

export default MyCraftList;