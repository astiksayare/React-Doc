import * as Component from '../../context-and-reducer';

export const Quality = () => {

    const { dispatch } = Component.useContextData();

    return (
        <section>
           <div>
                <button className="btn" onClick={() => dispatch({type: "INC"})}>+</button>
           </div>
        </section>
    )
}