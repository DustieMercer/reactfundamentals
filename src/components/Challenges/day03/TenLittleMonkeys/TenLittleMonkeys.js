import React, { useState } from 'react';

const TenLittleMonkeys = () => {
    const [monkeyCount, setMonkeyCount] = useState(10)

    function countdown() {
        
        if (monkeyCount !=0) {
            setMonkeyCount(monkeyCount - 1);
        }
       }

    return (
        <div>
            <p>{ monkeyCount !=0 ? `${monkeyCount} little monkies jumping` : 'no more monkies jumping' }</p>
            <br />
            <button onClick={ countdown }>Click Here</button>
            
        </div>
    );
};

export default TenLittleMonkeys;

