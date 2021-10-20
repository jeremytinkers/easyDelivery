const data = {
    riderData: [
        {
            id: 1,
            name: "kumar",
            status: 1,
        },
        {
            id: 2,
            name: "Thomas",
            status: 0,
        },
        {
            id: 3,
            name: "Singh",
            status: 1,
        },
        {
            id: 4,
            name: "Mohammed",
            status: 1,
        }
    ],
    curOrders :[{
        orderDescp: "Pizza Delivery",
        orderId: 1,
        riderId: 5,
        name: "Cristopher Robbins",
        accepted:0,
        riderCoordLat:47.4211,
        riderCoordLng:-72.9903,
        finished:0,
        startCoordLat:46.4211,
        startCoordLng:-75.9903,
        endCoordLat:47.4211,
        endCoordLng:-74.9903
    },
    {
        orderDescp: "Stationery Item Pickup",
        orderId: 2,
        riderId: 5,
        name: "Cristopher Robbins",
        accepted:2,
        riderCoordLat:47.4211,
        riderCoordLng:-72.9903,
        finished:0,
        startCoordLat:47.4211,
        startCoordLng:-74.9903,
        endCoordLat:46.4211,
        endCoordLng:-75.9903
    }
    ]
};

//accepted : 2-> not responded yet, 1-> accepted order, 2 -> declined order
export default data;