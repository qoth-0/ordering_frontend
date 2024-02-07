import OrderList from '@/views/OrderList';
import ItemList from '@/views/ItemList';

// 주문 관련 경로 관리
export const orderRoutes = [ 
    
    // 주문목록
    // http:localhost:8081/orders
    {
        path: '/orders', 
        name: 'OrderList', 
        component: OrderList 
    },
    // 상품목록
    {
        path: '/items', 
        name: 'ItemList', 
        component: ItemList 
    },
];