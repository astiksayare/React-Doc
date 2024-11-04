
const UserProps = () => {

    return <Props name={"Astik"} age={24} job={true} skills={['React', 'Javascript', 'Java', 'Sql']}/>
}


const Props = (props) => {

    return (
        <>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>Skills: {props.skills}</h1>
        <h1>Job: {props.job? "Got Job": "No Job"}</h1>
        </>
    )
}

export default UserProps;