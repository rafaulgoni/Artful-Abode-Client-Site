import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const card = useLoaderData()
    const navigate = useNavigate()
    const { name, subcategory, description, price, rating, customization, time, status, image, _id } = card
    const handleUpdateCraft = e =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const status = form.status.value;
        const image = form.image.value;
        const newAll = { name, subcategory, description, price, rating, customization, time, status, image}

        fetch(`https://b9a10-server-side-rafaulgoni.vercel.app/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    navigate('/myCraft')
                }
            })
    }
    
    return (
        <div>
            <div className="bg-base-200 p-6 md:p-24 container mx-auto">
                <h2 className="text-3xl font-extrabold">Add Craft Item</h2>
                <form onSubmit={handleUpdateCraft}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="item name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Subcategory name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subcategory" defaultValue={subcategory} placeholder="Subcategory name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="short description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="customization" defaultValue={customization} placeholder="customization" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Processing time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="time" defaultValue={time} placeholder="Processing time" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Stock status</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="status" defaultValue={status} placeholder="stock status" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Craft" className="btn btn-block bg-[#1DD100]" />
                </form>
            </div>
        </div>
    );
};

export default Update;