import React, {useState} from 'react'

const SignUp = () => {
    
    const [setData, changeData] =  useState({})
    const handleChange = e => {
        changeData({
            ...setData,
            [e.target.id]: e.target.value
        })
    }
    const handleSubmit = e => {
        console.log(setData);
        e.preventDefault()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
