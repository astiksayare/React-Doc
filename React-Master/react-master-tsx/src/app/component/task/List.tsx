import * as Api from '@/app/component/api';
import * as Type from '@/app/component/type';

export const List = () => {
    const items: Type.ProductType = Api.Product;
    return (
        <>
        {
            items.map(list => (
                <div key={list.productId}>
                    {
                        list.category.map(type => (
                           <div>
                             <h1>{Object.keys(type.mobile)}</h1>
                             <li>
                                {
                                    type.mobile.map(mob => (
                                        <div key={mob.id}>
                                            <li>Mobile name: {mob.name}</li>
                                            <li>Mobile Price: {mob.price}</li>
                                            <hr />
                                        </div>
                                    ))
                                }
                             </li>

                             <h1>{Object.keys(type.laptop)}</h1>
                             <li>
                                {
                                    type.laptop.map(lap => (
                                        <div key={lap.id}>
                                            <li>Laptop Name: {lap.name}</li>
                                            <li>Laptop Price: {lap.price}</li>
                                            <hr />
                                        </div>
                                    ))
                                }
                             </li>

                              <h1>{Object.keys(type.watch)}</h1>
                             <li>
                                {
                                    type.watch.map(watch => (
                                        <div key={watch.id}>
                                            <li>Watch Name: {watch.name}</li>
                                            <li>Watch Price: {watch.price}</li>
                                            <hr />
                                        </div>
                                    ))
                                }
                             </li>
                           </div>   
                            
                        ))
                    }
                </div>
            ))
        }
        </>
    )
}