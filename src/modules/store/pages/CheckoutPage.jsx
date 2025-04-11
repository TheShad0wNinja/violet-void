import { Button, Container, Divider, TextInput, Title } from "@modules/_shared/App";
import { useCart } from "../context/cartContext";
import { useFormik } from "formik";
import * as yup from "yup";

export default function CheckoutPage() {
  const { cartItems } = useCart();

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardName: "",
      expiration: "",
      cvv: ""
    },
    validationSchema: yup.object().shape({
      cardNumber: yup
        .string()
        .length(16, "Number has to be 16 letters")
        .required("Card number is required"),
      cardName: yup.string().required("The name on card is required"),
      expiration: yup
        .string()
        .typeError("Not a valid expiration date. Example: MM/YY")
        .max(5, "Not a valid expiration date. Example: MM/YY")
        .matches(/([0-9]{2})\/([0-9]{2})/, "Not a valid expiration date. Example: MM/YY")
        .required("The expiration date is required"),
      cvv: yup.string().length(3, "Cvv is only 3 numbers").required("Cvv is requried")
    }),
    onSubmit: values => {
      console.log("Form submitted: ", values);
    }
  });

  return (
    <Container>
      <div className="flex flex-col gap-12 sm:flex-row">
        <div className="flex-3/5">
          <h2 className="text-lg capitalize">Payment</h2>
          <Divider direction="left" className="mb-4" />
          <h4 className="mb-2 text-sm">Card details</h4>
          <form id="myForm" onSubmit={formik.handleSubmit} className="grid-col-2 grid gap-2">
            <TextInput
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              label="Card Number"
              className="col-span-2"
              placeholder="Enter your card number"
            />
            <p className="col-span-2 text-red-500">{formik.errors.cardNumber}</p>
            <TextInput
              value={formik.values.cardName}
              onChange={formik.handleChange}
              label="Name on card"
              name="cardName"
              className="col-span-2"
              placeholder="Enter the cardholder name"
            />
            <p className="col-span-2 text-red-500">{formik.errors.cardName}</p>
            <TextInput
              value={formik.values.expiration}
              onChange={formik.handleChange}
              label="Expiration"
              name="expiration"
              placeholder="Enter your expiration"
            />
            <TextInput
              value={formik.values.cvv}
              onChange={formik.handleChange}
              label="CVV"
              name="cvv"
              placeholder="Enter CVV"
            />
            <p className="col-span-1 text-red-500">{formik.errors.expiration}</p>
            <p className="col-span-1 text-red-500">{formik.errors.cvv}</p>
          </form>
        </div>
        <div className="flex-2/5">
          <h2 className="text-lg capitalize">Summary and Total</h2>
          <Divider direction="left" className="mb-4" />
          <div className="flex flex-col gap-4">
            {cartItems.map(item => (
              <div className="flex" key={item.title}>
                <img
                  className="h-[150px] w-[120px] flex-1/3 rounded-xl object-cover"
                  src={item.coverImageUrl}
                  alt={item.label + "_cover"}
                />
                <div className="flex flex-2/3 flex-col justify-center pl-2.5">
                  <h4 className="line-clamp-2 text-xl font-bold">{item.title}</h4>
                  <h5 className="text-gray-200">${item.price}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-nowrap justify-between">
            <p>Price</p>
            <p className="text-lg font-semibold">
              ${cartItems.reduce((acc, i) => (acc += i.price), 0)}
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            You are purchasing a digital license for this product.
            <br />
            By clicking "Place Order" below, I represent that I am over 18 and an authorized user of
            this payment method.
          </p>
          <Button onClick={() => formik.submitForm()} uppercased fullWidth className="mt-4">
            Place Order
          </Button>
        </div>
      </div>
    </Container>
  );
}
