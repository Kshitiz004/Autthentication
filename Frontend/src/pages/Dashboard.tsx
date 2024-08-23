import React from 'react';

const Dashboard: React.FC<{role: string}> = ({ role }) => {
    if (role === 'Role A'){
        return <div>Upload Documents</div>;
    }else if (role === 'Role B'){
        return <div>Approve Documents</div>;
    }

    return null;
};

export default Dashboard;