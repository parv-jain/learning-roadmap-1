interface AbstractOrderFactory {
    createMarketOrder(): MarketOrder;
    createLimitOrder(): LimitOrder;
    createStopOrder(): StopOrder;
    createStopLimitOrder(): StopLimitOrder;
}