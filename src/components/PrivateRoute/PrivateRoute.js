import React, { useState } from 'react';
import PrivatComponent from '../PrivatComponent/PrivatComponent';

const PrivateRoute = () => {
    const [isAdult, setIsAdult] = useState(false);
    if (!isAdult) {
        return (
            <div>
                <button onClick={() => setIsAdult(true)} >I am over 18 years old</button>
            </div>
        )
    }
    return <PrivatComponent />
}

export default PrivateRoute;