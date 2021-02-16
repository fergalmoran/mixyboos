import React, { useState } from 'react';
import axios from 'axios';
import Progress from '../progress';
import { DetailsForm, FileUpload } from '../create-mix';

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
    const [mixId, setMixId] = useState('');

    return (
        <React.Fragment>
            {createState === CreateState.new ? (
                <FileUpload />
            ) : createState === CreateState.uploading ? (
                <DetailsForm mixId={mixId} />
            ) : (
                <h1>WTF?</h1>
            )}
        </React.Fragment>
    );
};
export default Upload;
