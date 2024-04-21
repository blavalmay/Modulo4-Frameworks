import { orderApi, orderApiInfo } from "./api.model";

export const orderInfo: orderApiInfo = {
    "number": 8874,
    "provider": "MAQUINARIA S.L.",
}

export const orderList: orderApi[] = [
    {
        "id": 1,
        "validated": true,
        "description": "Reactivos maquinaria",
        "amount": 2345,
    },
    {
        "id": 2,
        "validated": true,
        "description": "Recambios impresión",
        "amount": 136,
    },
    {
        "id": 3,
        "validated": false,
        "description": "Soportes plataforma",
        "amount": 540,
    },
    {
        "id": 4,
        "validated": false,
        "description": "Tornilleria",
        "amount": 50.3,
    },
    {
        "id": 5,
        "validated": true,
        "description": "Anclajes",
        "amount": 88,
    },
]