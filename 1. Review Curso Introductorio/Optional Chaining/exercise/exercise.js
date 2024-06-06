const order = {
  customer: {
    address: {
      city: "Paris"
    }
  }
};

if (!order.costumer?.address?.city) {
  console.log("City is required");
}
