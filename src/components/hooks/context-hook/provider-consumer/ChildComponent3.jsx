
import React from "react";
import { UserNameContext } from "./ParentComponent";
import { UserAgeContext } from "./ParentComponent";

const ChildComponent3 = () => {
    return (
        <UserNameContext.Consumer>
            {
                (name) => {
                    return ( 
                        <UserAgeContext.Consumer>
                            {
                                (age) => {
                                    return <h1 style={{textAlign: 'center'}}>My name is {name} and I'm {age} years old.</h1>
                                }
                            }
                        </UserAgeContext.Consumer>
                     )
                }
            }
        </UserNameContext.Consumer>
    )
}

export default ChildComponent3;