import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderItems: [
      {
        title: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    address: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      district: { type: String, required: true },
      street: { type: String, required: true },
      houseNumber: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    shippingFee: { type: Number, required: true },
    finalAmount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;