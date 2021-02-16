import React from 'react';

interface IProgressProps {
    percentage: number;
}
const Progress = ({ percentage }: IProgressProps) => {
    return (
        <React.Fragment>
            {percentage > 0 && percentage < 100 && (
                <div className="h-3 relative  rounded-full overflow-hidden mb-10 w-full">
                    <div className="w-full h-full bg-gray-200 absolute"></div>
                    <div
                        id="bar"
                        className="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Progress;
