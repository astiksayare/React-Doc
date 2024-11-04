
import UserList from "./user-list/UserList";
import ProductList from "./product-list/ProductList";

const List = () => {

    const userAvailable = false;

    return userAvailable ? <UserList /> : <ProductList />
}

export default List;