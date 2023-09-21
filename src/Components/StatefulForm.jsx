import React, { useState } from 'react';

const StatefulForm = () => {
    const [email,setEmail ] = useState(null)
    const [password,setPassword] = useState(null)
    const [name,setName] = useState(null)

    const handleSubmit = e=>{
        e.preventDefault();
        if(password.length < 6){
            console.log("Password is less than 6")
        }
        else{
            console.log(name)
            console.log(password)
            console.log(email)
        
        }
    }

    const handleEmailChange = e =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        e.preventDefault();
        setPassword(e.target.value)
     
    }
    const handleNameChange = e =>{
        e.preventDefault();
        setName(e.target.value)
     
    }
   

    return (
        <div>
            <div>
            <form action="" onSubmit={handleSubmit} >
                <input onChange={handleNameChange} type="text" className='border-black border-2' name='name'/> <br />
                <input onChange={handlePasswordChange} type="password" className='border-black border-2' name='password' required/> <br />
                <input onChange={handleEmailChange} type="email" className='border-black border-2' name='email'/> <br />
                <button>Submit</button>
                
            </form>
        </div>
        </div>
    );
};

export default StatefulForm;