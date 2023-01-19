import React from 'react';

import { useGetWorkByIDQuery } from '../redux';

const ExpDescription = ({ workID }) => {

    const {data, isLoading } = useGetWorkByIDQuery(workID);

    return (
        <div>
            { data && <p className='p-text' > { isLoading ? 'Loading...' : data.desc} </p> }
        </div>
    );
}

export default ExpDescription;
