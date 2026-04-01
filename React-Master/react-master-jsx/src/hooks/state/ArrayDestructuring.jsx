
import React from "react"

export const ArrayDestructuring = () => {

    const [fruits, setFruits] = React.useState(['Apple', 'Mango', 'Banana']);

    const addFruit = () => setFruits([...fruits, 'Orange']);

    return (
       <section>
            {
                fruits.map(fruit => (
                    <li key={Math.random() * 100}>
                        {fruit}
                    </li>
                ))
            }

            <button className="btn" onClick={addFruit}>Add Fruits</button>
       </section>
    )
}