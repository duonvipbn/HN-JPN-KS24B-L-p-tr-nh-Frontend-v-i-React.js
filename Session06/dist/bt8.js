"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateOrderTotal(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (let item of order.items) {
        const lineTotal = item.product.price * item.quantity;
        console.log(`- ${item.product.name} x ${item.quantity} → ${lineTotal.toLocaleString()} VND`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const product1 = {
    id: "P001",
    name: "Áo sơ mi",
    price: 250000
};
const product2 = {
    id: "P002",
    name: "Quần tây",
    price: 400000
};
const orderSample = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: product1, quantity: 2 },
        { product: product2, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(orderSample);
//# sourceMappingURL=bt8.js.map