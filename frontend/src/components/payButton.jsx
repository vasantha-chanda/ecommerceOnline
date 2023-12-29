import axios from "axios";
import { useSelector } from "react-redux";

const payButton = ({ cartItems }) => {
    const handleCheckout = () => {
        axios
        .post("http://localhost:5000/stripe/create-checkout-session", {
          cartItems
        })
        .then((response) => {
          if (response.data.url) {
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log(err.message));
    };
    
    return (
        <>
          <button onClick={() => handleCheckout()}>Check out</button>
        </>
      );
}
export default payButton;