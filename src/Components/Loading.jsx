import React from 'react'
import { Vortex } from 'react-loader-spinner';


const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh100">
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
          
        </div>
    );
};

export default Loading;