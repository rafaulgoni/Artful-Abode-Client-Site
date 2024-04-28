import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from './../Providers/AuthProvider';

const AddCraftItem = () => {
    const {user} =useContext(AuthContext)
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const status = form.status.value;
        const image = form.image.value;
        const email = user.email;

        const newAll = { name, subcategory, description, price, rating, customization, time, status, image, email}

        console.log(newAll);

        fetch('http://localhost:5000/user',{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newAll)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add craft successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-base-200 p-6 md:p-24 container mx-auto">
            <h2 className="text-3xl font-extrabold">Add Craft Item</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="item name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Subcategory name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Subcategory name" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="customization" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="time" placeholder="Processing time" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Stock status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status" placeholder="stock status" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required/>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Craft" className="btn btn-block bg-[#1DD100]" />
            </form>
        </div>
    );
};

export default AddCraftItem;