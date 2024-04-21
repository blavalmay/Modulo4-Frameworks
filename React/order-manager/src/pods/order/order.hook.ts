import { orderApi } from "@/core/api/api.model";
import { useState } from "react";

interface Props {
    orderList: orderApi[];
}

export const useOrderManager = (props: Props) => {
    const [validated, setValidated] = useState<boolean[]>(initialState(props.orderList));
    const [amounts, setAmounts] = useState<number[]>(initialAmount(props.orderList));
    const [openModal, setOpenModal] = useState(false);

    const onStatusChange = (selectedItems: number[], status: boolean) => {
        let newValidated = [...validated];
        newValidated.map((_, index) => {
            if (selectedItems.includes(index + 1)) {
                status ? newValidated[index] = true : newValidated[index] = false;
            }
        })
        setValidated(newValidated);
    }

    function getProgressValue(list: boolean[]) {
        let validatedItems = 0;
        list.map((item) => {
            if(item) {
                validatedItems ++;
            }
        })
        return (validatedItems * 100) / list.length;
    };

    const progressValue = getProgressValue(validated);

    const onAmountChange = (newValue: string, id: number) => {
        let newAmount = [...amounts];
        if(newValue) {
            newAmount[id - 1] = parseFloat(newValue);
            setAmounts(newAmount);
        }
    }

    function getTotalAmount(list: number[]) {
        let totalAmount = 0;
        list.map((item) => {
            totalAmount += item;
        })
        return totalAmount;
    }
    
    const totalAmount = getTotalAmount(amounts);
    
    const sendOrder = () => {
        setOpenModal(true);
    }

    return {
        totalAmount,
        progressValue,
        validated,
        onStatusChange,
        onAmountChange,
        sendOrder,
        openModal,
    }
}

function initialState(list: orderApi[]): boolean[] {
    let initialState = [];
    list.map((item) => {
        initialState.push(item.validated);
    })
    return initialState;
}

function initialAmount(list: orderApi[]): number[] {
    let initialAmount = [];
    list.map((item) => {
        initialAmount.push(item.amount);
    })
    return initialAmount;
}