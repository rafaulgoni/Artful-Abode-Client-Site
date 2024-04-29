import { useContext } from "react";
import { AuthContext } from './../Providers/AuthProvider';
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const MyCraftList = () => {
  const { user } = useContext(AuthContext)
  const [item, setItem] = useState([])
  fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/data/${user.email}`)
    .then(res => res.json())
    .then(data => {
      setItem(data)
    })


  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/user/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
              const remaining = item.filter(cof => cof._id !== _id);
              setItem(remaining);
            }
          })

      }
    })
  }
  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-8">
      {
        item.map(p => <div key={p._id}><div className="card bg-base-100 shadow-xl">
          <figure className="max-h-[300px]"><img src={p.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {p.name}
              <div className="badge bg-[#1DD100]">NEW</div>
            </h2>
            <p>{p.subcategory}</p>
            <div className='flex justify-around'>
              <p className='text-[#1DD100]'>Price: {p.price}</p>
              <p className='flex items-center text-[#1DD100]'><FaStar></FaStar> {p.rating}</p>
            </div>
            <div className="card-actions justify-end">
              <div onClick={() => handleDelete(p._id)} className="btn btn-sm outline outline-red-600">Delate</div>
              <Link to={`/update/${p._id}`} className="btn btn-sm outline outline-[#1DD100]">Update</Link>
            </div>
          </div>
        </div></div>)
      }
    </div>
  );
};

export default MyCraftList;