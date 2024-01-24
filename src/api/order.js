import orderApiService from "./orderApiService";


// Create order
export const createOrder = async (payload) => {
  const order = await orderApiService.post("order", payload);
  return order;
};

// get all orders
export const getOrders = async () => {
  try {
    const order = await orderApiService.get("orders-all");
    return order.data.data;
  } catch (error) {
    // Handle the error here, log it, and return an empty array
    console.error("Error fetching orders:", error);
    return []; // Return an empty array in case of failure
  }
};

