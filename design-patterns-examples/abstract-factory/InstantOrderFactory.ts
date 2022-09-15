class InstantOrderFactory implements AbstractOrderFactory {
    createMarketOrder(): MarketOrder {
        throw new Error("Method not implemented.");
    }
    createLimitOrder(): LimitOrder {
        throw new Error("Method not implemented.");
    }
    createStopOrder(): StopOrder {
        throw new Error("Method not implemented.");
    }
    createStopLimitOrder(): StopLimitOrder {
        throw new Error("Method not implemented.");
    }
}
