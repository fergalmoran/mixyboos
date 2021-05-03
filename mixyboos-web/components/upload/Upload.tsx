import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { DetailsForm, FileUpload } from '../create-mix';
import Progress from '../progress';

enum CreateState {
    new,
    uploading,
    editing,
    /*
        1. uploading & editing
        2. editing & uploaded
        3. done editing & uploading
    */
    done,
}

const Upload = () => {
    const [createState, setCreateState] = useState(CreateState.new);
    const [percentageUploaded, setPercentageUploaded] = useState(0);
    const [mixId] = useState(uuidv4());

    return (
        <React.Fragment>
            <div className="flex flex-col px-20 justify-items-center">
                <Progress percentage={percentageUploaded} mixId={mixId} />
                {createState === CreateState.new ? (
                    <FileUpload
                        mixId={mixId}
                        onUploadStart={() =>
                            setCreateState(CreateState.uploading)
                        }
                        onUploadProgress={(total, loaded) =>
                            setPercentageUploaded(
                                Math.round((loaded * 100) / total)
                            )
                        }
                    />
                ) : (
                    <DetailsForm mixId={mixId} />
                )}
            </div>
        </React.Fragment>
    );
};
export default Upload;
