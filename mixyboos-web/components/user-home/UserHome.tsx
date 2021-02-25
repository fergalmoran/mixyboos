import React from 'react';
import MixList from '../mix-list/MixList';

const UserHome = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 h-full bg-gray-100">Left Feed</div>
      <div className="col-span-8">
        <MixList />
      </div>
      <div className="col-span-2 invisible lg:visible">Right Feed</div>
    </div>
    // <React.Component>
    //   <div className="grid grid-cols-3 gap-4">
    //     <div>Left Feed</div>
    //     <div>
    //       <MixList />
    //     </div>
    //     <div>Right Feed</div>
    //   </div>
    // </React.Component>
  );
};

export default UserHome;
