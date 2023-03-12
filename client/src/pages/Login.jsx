import React from 'react'

function Link(props) {
    return null;
}

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form >
                <input required type="text" placeholder='username'/>
                <input required type="password" placeholder='password'/>
                <button>Login</button>
                <p>This is an error!</p>
                <span>Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login