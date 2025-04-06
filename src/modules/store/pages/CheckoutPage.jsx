import { Button, Container, Divider, TextInput, Title } from "@modules/_shared/App";
import { useCart } from "../context/cartContext";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  console.log(cartItems);
  return <Container>
    <div className="flex flex-col sm:flex-row gap-12">
      <div className="flex-3/5">
        <h2 className="text-lg capitalize">Payment</h2>
        <Divider direction="left" className="mb-4" />
        <h4 className="text-sm mb-2">Card details</h4>
        <form className="grid gap-4 grid-col-2">
          <TextInput required label="Card Number" className="col-span-2"/>
          <TextInput required label="Name on card" className="col-span-2" />
          <TextInput required label="Expiration" />
          <TextInput required label="CVV" />
        </form> 
      </div>
      <div className="flex-2/5">
        <h2 className="text-lg capitalize">Summary and Total</h2>
        <Divider direction="left" className="mb-4" />
        <div className="flex flex-col gap-4">
          {cartItems.map(item => (
            <div className="flex" key={item.title}>
              <img className="flex-1/3 h-[150px] w-[120px] rounded-xl object-cover" src={item.coverImageUrl} alt={item.label + "_cover"} />
              <div className="flex-2/3 flex flex-col justify-center pl-2.5">
                <h4 className="text-xl font-bold line-clamp-2">{item.title}</h4>
                <h5 className="text-gray-200">${item.price}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-nowrap justify-between mt-5">
          <p>Price</p>
          <p className="text-lg font-semibold">${cartItems.reduce((acc, i) => acc += i.price, 0)}</p>
        </div>
        <p className="text-sm mt-4 text-gray-300">You are purchasing a digital license for this product.<br />By clicking "Place Order" below, I represent that I am over 18 and an authorized user of this payment method.</p>
        <Button uppercased fullWidth className=" mt-4" >Place Order</Button>
      </div>
    </div>
  </Container>;
}
