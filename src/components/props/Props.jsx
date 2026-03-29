
const UserProps = () => {

    // 1. Simple Props
    // return <Props name={"Astik"} age={24} job={true} skills={['React', 'Javascript', 'Java', 'Sql']}/>

    // 2. Default Props
    // return <Props skills={['React', 'Javascript', 'Java', 'Sql']}/>

    // 3. Children Props
    const skills=['React', 'Javascript', 'Java', 'Sql'];
    const name = "Astik";
    const job = true;
    const age = 24;

    return (
    
    <Props>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1 className="flex justify-start gap-3">Skills: {skills.map(ele => {
            return (
                <h1 key={ele}>
                {ele}
                </h1>
            )
        })}</h1>
        <h1>Job: {job? "Got Job": "No Job"}</h1>
    </Props>

    )
}

/*

// 1. Simple Props
const Props = (props) => {

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] text-xl gap-5">
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1 className="flex justify-start gap-3">Skills: {props.skills.map(ele => {
            return (
                <h1 key={ele}>
                {ele}
                </h1>
            )
        })}</h1>
        <h1>Job: {props.job? "Got Job": "No Job"}</h1>
        </div>
    )
}

*/

/* 

// 2. Default Props
const Props = ({name="User Not Found", job = false, age = 1, skills = []}) => {

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] text-xl gap-5">
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1 className="flex justify-start gap-3">Skills: {skills.map(ele => {
            return (
                <h1 key={ele}>
                {ele}
                </h1>
            )
        })}</h1>
        <h1>Job: {job? "Got Job": "No Job"}</h1>
        </div>
    )
}

*/

// 3. Children Props
const Props = ({children}) => {

    return <div className="flex flex-col justify-center items-center h-[100vh] text-xl gap-5">{children}</div>
}


export default UserProps;