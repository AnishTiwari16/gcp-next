import React from 'react';

const Page = () => {
    return (
        <div>
            page <div>{process.env.NEXT_PUBLIC_TITLE}</div>
        </div>
    );
};

export default Page;
