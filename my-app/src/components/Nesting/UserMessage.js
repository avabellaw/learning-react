import React from 'react'

function UserMessage(props) {
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
                </div>
            ) : (
                <p>Please sign in.</p>
            )}
        </div>
    )
}

export default UserMessage