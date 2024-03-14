import React, { useState } from 'react';

const Cartdetails = () => {

    const [addItem, setAddItem] = useState(0);

    setAddItem()

    return (
        <div className='align'>
            <button onClick={()=>add()}>+</button>
            {addItem}
            <button onClick={()=>Sub()}>-</button>
        </div>
    );
};

export default Cartdetails;