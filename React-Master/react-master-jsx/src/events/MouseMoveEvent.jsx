
export const MouseMoveEvent = () => {

    const onMouseHandler = () => {

        alert("Mouse In");
    }
    return (
        <p onMouseMove={onMouseHandler}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium assumenda adipisci, asperiores quod cupiditate impedit eum optio odit officia dolorem iusto, aperiam necessitatibus quos saepe quam, aliquam provident odio nam!
        </p>
    )
}