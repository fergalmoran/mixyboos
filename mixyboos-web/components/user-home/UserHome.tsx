import React from 'react';
import MixList from '../mix-list/MixList';

const UserHome = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="hidden lg:inline h-screen mx-2  w-1/6 bg-indigo-400">
        Left Feed
      </div>
      <div className="lg:w-2/3 w-full p-4">
        <MixList />
      </div>
      <div className="hidden lg:inline h-screen mx-2 p-2 w-1/6 bg-red-400">
        Right Feed
      </div>
    </div>
  );
};

export default UserHome;
