import { useFetch } from "./useFetch";

 const url = `https://fakestoreapi.com/products`;

const UseCustomHook = () => {

    const data = useFetch(url);

    return (
        <div style={{ textAlign: "center"}}>
        <h1>Use Custom Hook</h1>

        <div>
            {
                data.map( item => (
                    <div key={item.id}>
                        {item.title}
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default UseCustomHook;