import React from 'react';

const ErrorMessage = ({ message, className }) => {
    return (
        <div className={className}>
            {message}
        </div>
    );
}

export default ErrorMessage;