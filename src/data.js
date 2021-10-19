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
        orderDescp: "Rudolf Reindeer",
        orderId: 1,
        riderId: 5,
        name: "Cristopher Robbins",
        accepted:0,
        riderCoord: "0.0.0.0"
    },
    {
        orderDescp: "Santa's Reindeer",
        orderId: 2,
        riderId: 5,
        name: "Cristopher Robbins",
        accepted:2,
        riderCoord: "0.0.0.0"
    }
    ]
};

//accepted : 2-> not responded yet, 1-> accepted order, 2 -> declined order
export default data;