import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const LoadingSpinner: React.FC = ({ }) => {

    return (
        <div className="flex items-center justify-center mt-3">
            <FontAwesomeIcon
                icon={faSpinner}
                className="text-4xl text-blue-300"
                spinPulse
            />
        </div>
    );
};

export default LoadingSpinner;
