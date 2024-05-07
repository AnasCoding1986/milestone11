import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Checkout = () => {

    const services = useLoaderData();

    const { _id,title,price,img } = services;
    console.log(title,price);

    const {user} = useContext(AuthContext);

    const handleBook = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const bookings = {
            customerName : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(bookings);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (

        <div>
            <h2 className="text-center text-3xl py-8">Book Your Services Now</h2>
            <div className="hero py-20 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleBook} className="card-body">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayname} placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" placeholder="date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due amount</span>
                                    </label>
                                    <input type="number" name="price" defaultValue={price} className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Book Now" className="btn btn-block" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;