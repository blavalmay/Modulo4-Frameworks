import React from "react"
import { OrderHeader, OrderList } from "./components"
import { orderList } from "@/core"

export const OrderContainer = () => {
    return (
        <>
            <OrderHeader/>
            <OrderList list={orderList}/>
        </>
    )
}