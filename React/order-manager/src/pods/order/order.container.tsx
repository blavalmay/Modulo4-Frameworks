import React from "react"
import { OrderHeader, OrderList } from "./components"
import { orderInfo, orderList } from "@/core"
import { useOrderManager } from "./order.hook";
import { OrderSummary } from "./components/order-summary";

export const OrderContainer = () => {

    const {
        totalAmount,
        progressValue,
        validated,
        onStatusChange,
        onAmountChange,
        sendOrder,
        openModal,
    } = useOrderManager({orderList});

    return (
        <>
            <OrderSummary orderInfo={orderInfo}totalAmount={totalAmount} openModal={openModal}/>
            <OrderHeader
                orderInfo={orderInfo}
                totalAmount={totalAmount}
                progressValue={progressValue}
                sendOrder={sendOrder}
            />
            <OrderList 
                list={orderList} 
                state={validated} 
                onStatusChange={onStatusChange} 
                onAmountChange={onAmountChange}
            />
        </>
    )
}