const OrderModel = require("../models/ordersModel");
exports.placeAnOrder = async (req, res) => {
  console.log("placedOrder route hit", req.body);
  try {
    const { userAuthId, shipingInfo, products, status } = req.body;
    const result = await OrderModel.create({
      userAuthId,
      shipingInfo,
      products,
      status,
    });

    if (result) {
      return res.status(200).json({ success: "Successfully order placed" });
    } else {
      return res.status(400).json({ Error: "Error placing order" });
    }
  } catch (error) {
    return res.json({ ServerError: error });
  }
};

exports.getAllOrdersOfAUser = async (req, res) => {
  try {
    const { userAuthId } = req.query;

    const orders = await OrderModel.find({ userAuthId });
    if (orders) {
      return res.status(200).json({ orders: orders });
    } else {
      return res.status(400).json({ Error: "Error fetching orders" });
    }
  } catch (error) {
    return res.status(500).json({ ServerError: error });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    if (orders) {
      return res.status(200).json({ orders: orders });
    } else {
      return res.status(400).json({ error: "orders not found" });
    }
  } catch (error) {
    return res.status(500).json({ Error: "Server error" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { _id, newStatus } = req.body;
    console.log(_id, newStatus);

    const updateOrder = await OrderModel.findOneAndUpdate(
      { _id },
      { status: newStatus },
      { new: true }
    );

    if (updateOrder) {
      return res
        .status(200)
        .json({ Success: "Successfully updated order status" });
    } else {
      return res.status(400).json({ Error: "Error updating order status" });
    }
  } catch (error) {
    return res.status(500).json({ ServerError: error });
  }
};
