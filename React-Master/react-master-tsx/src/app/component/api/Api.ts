import * as Type from '@/app/component/type';

export const Product: Type.ProductType = [
    {
        productId: 1,
        category: [
            {
                mobile: [
                    {
                        id: 101,
                        name: 'Realme 5 Pro',
                        price: 18000
                    }, 
                    {
                        id: 102,
                        name: 'Redmi',
                        price: 20000
                    },
                    {
                        id: 103, 
                        name: 'Iphone',
                        price: 130000
                    }, 
                    {
                        id: 104, 
                        name: 'Samsung',
                        price: 60000
                    }
                ],
                laptop: [
                    {
                        id: 201,
                        name: 'Asus vivobook 15 oled',
                        price: 50000
                    },
                    {
                        id: 202,
                        name: 'HP Victos',
                        price: 60000
                    },
                    {
                        id: 203,
                        name: 'Lenovo',
                        price: 45000
                    }
                ],
                watch: [
                    {
                        id: 301,
                        name: 'Fast-track',
                        price: 2000
                    },
                    {
                        id: 302,
                        name: 'Noice',
                        price: 2500
                    },
                    {
                        id: 303,
                        name: 'Titanic',
                        price: 4000
                    }
                ]
            }
        ]
    }
]