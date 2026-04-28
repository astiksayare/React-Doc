

export type ProductType = [
    {
        productId: number,
        category: [
            {
                mobile: [
                    {
                        id: number;
                        name: string;
                        price: number
                    }, 
                    {
                        id: number;
                        name: string;
                        price: number
                    },
                    {
                        id: number; 
                        name: string;
                        price: number
                    }, 
                    {
                        id: number; 
                        name: string;
                        price: number
                    }
                ],
                laptop: [
                    {
                        id: number;
                        name: string;
                        price: number;
                    },
                    {
                        id: number;
                        name: string;
                        price: number
                    },
                    {
                        id: number;
                        name: string;
                        price: number
                    }
                ],
                watch: [
                    {
                        id: number;
                        name: string;
                        price: number
                    },
                    {
                        id: number;
                        name: string;
                        price: number
                    },
                    {
                        id: number;
                        name: string;
                        price: number
                    }
                ]
            }
        ]
    }
]