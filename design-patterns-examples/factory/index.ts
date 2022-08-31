/**
 * Factory Method is a creational design pattern
 * that provides an interface for creating objects in a superclass,
 * but allows subclasses to alter the type of objects that will be created.
 */

enum OrderType {
    MARKET = 'MARKET',
    LIMIT = 'LIMIT'
}

const createOrder = (orderType: OrderType): Order => {
    switch (orderType) {
        case OrderType.MARKET:
            return new MarketOrderFactory().createOrder();
        case OrderType.LIMIT:
            return new LimitOrderFactory().createOrder();
        default:
            throw new Error('Invalid order type');
    }
}