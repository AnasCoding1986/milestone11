

const BookingRow = ({ booking,handleDelete,handleConfirm }) => {

    const { _id,customerName, email, img, date, service, price, status } = booking;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>
            <td>
                {email}
            </td>
            <td>{price}</td>
            <th>
                {status === 'confirm' ? <span className="font-bold text-xl"> Confirmed</span> :
                <button onClick={()=> handleConfirm(_id)} className="btn btn-ghost btn-xs">please confirm</button>                    
                }
            </th>
        </tr>
    );
};

export default BookingRow;