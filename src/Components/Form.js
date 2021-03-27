import React, {useState} from 'react';


const Form = () => {
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [confirmPass,setconfirmPass] = useState("");



    return(
        <div>
            <form>
                <p>First Name <input onChange={(e)=>setfirstName(e.target.value)}/></p>
                <p>Last Name <input onChange={(e)=>setlastName(e.target.value)}/> </p> 
                <p>Email <input onChange={(e)=>setemail(e.target.value)}/> </p> 
                <p>Password <input onChange={(e)=>setpassword(e.target.value)}/> </p> 
                <p>Confirm Password <input onChange={(e)=>setconfirmPass(e.target.value)}/> </p> 
            </form>
            <div>
                <h6>Your Form Data</h6>
                <p>First Name   {firstName} </p>
                <p>Last Name    {lastName} </p>
                <p>Email    {email} </p>
                <p>Password    {password} </p>
                <p>Confirm Password    {confirmPass} </p>
            </div>
        </div>
    )
}
export default Form;