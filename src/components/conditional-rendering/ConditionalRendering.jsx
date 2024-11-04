
const ValidPassword = () => <h1 style={{textAlign: 'center'}}>Valid Password</h1>
const InValidPassword = () => <h1 style={{textAlign: 'center'}}>Invalid Password</h1>

const ConditionalRendering = ({isValid}) => {

    // if(isValid){
    //     return <ValidPassword />
    // }

    // return <InValidPassword />

    return isValid ? <ValidPassword /> : <InValidPassword />
    
}

export default ConditionalRendering;