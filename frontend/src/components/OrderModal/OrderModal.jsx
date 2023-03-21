import { useSelector } from "react-redux";
import "./OrderModal.css";

const OrderModal = ({ order, closeModal }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="order-modal">
        <div className="order-modal-content">
          <h2>Order:</h2>
          <h4>{order._id}</h4>
          <hr />
          <div className="order_items">
            {order.order_items.map((item) => (
              <div className="card">
                <div className="d-flex card-body">
                  <img className="w-25 img" src={item.product.image} alt="" />
                  <div>
                    <h3 className="card-title mx-5">{item.product.name}</h3>
                    <p className=" mx-5">Qty: {item.count}</p>
                    <p className="mx-5">
                      Price: {(item.count * item.product.price).toFixed(2)} /-
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="btn btn-danger mt-3 w-100"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
