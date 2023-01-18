import React from 'react';

import { useGetWorkByIDQuery } from '../redux';

const ExpDescription = ({ workID }) => {

    const workResp = useGetWorkByIDQuery(workID);

    return (
        <div>
            { workResp.data && <p className='p-text' > {workResp.data.desc} </p> }
        </div>
    );
}

export default ExpDescription;
