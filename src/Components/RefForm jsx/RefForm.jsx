import React, { useRef } from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(passwordRef.current.value)
        console.log(emailRef.current.value)
       
    }


    return (
        <div>
                 <form action="" onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" className='border-black border-2' name='name'/> <br />
                <input ref={passwordRef}   type="password" className='border-black border-2' name='password' /> <br />
                <input ref={emailRef} type="email" className='border-black border-2' name='email'/> <br />
                <button className=' px-6 py-2 bg-amber-600'>Submit</button>
                
            </form>
        </div>
    );
};

export default RefForm;