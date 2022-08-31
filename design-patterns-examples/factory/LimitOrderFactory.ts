class LimitOrderFactory implements OrderFactory {
    createOrder(): Order {
        return new LimitOrder();
    }
}