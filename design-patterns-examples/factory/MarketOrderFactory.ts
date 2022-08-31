class MarketOrderFactory implements OrderFactory {
    createOrder(): Order {
        return new MarketOrder();
    }
}