import React from 'react'

function MethodAsPropsChild(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <p>Welcome to the site ! Please complete the following steps:</p>
                    <ol>
                        <li>Confirm email</li>
                        <li>Complete profile</li>
                        <li>Subscribe to newsletter</li>
                    </ol>

                    <button onClick={props.clickHandler}>Sign out</button>
                </div>
            ) : (
                <div>
                    <p>Please sign in.</p>
                    <button onClick={props.clickHandler}>Sign in</button>
                </div>
            )}
        </div>
    )
}

export default MethodAsPropsChild