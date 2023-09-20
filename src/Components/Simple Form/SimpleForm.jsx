import React from 'react';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
    console.log(e.target.name.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className='border-black border-2' name='name'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;