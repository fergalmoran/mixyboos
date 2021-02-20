import React, { useState } from 'react';
import axios from 'axios';

interface IFileUploadProps {
    mixId: string;
    onUploadStart: () => void;
    onUploadProgress: (total: number, loaded: number) => void;
}

const FileUpload = ({
    mixId,
    onUploadStart,
    onUploadProgress,
}: IFileUploadProps) => {
    const [uploading, setUploading] = useState(false);

    const startUpload = async (event) => {
        const url = '/api/upload';
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        setUploading(true);
        try {
            onUploadStart();
            await axios.put(url, formData, {
                onUploadProgress: (e) => {
                    console.log('Upload', 'progress', e);
                    onUploadProgress(e.total, e.loaded);
                },
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
        } catch (err) {
            console.error('Upload', 'Error', err);
        }
    };
    return (
        <React.Fragment>
            <div className="flex w-full justify-center">
                <div className="flex lg:w-1/2 rounded-md shadow-md bg-gray-50 p-4">
                    <div className="flex flex-col justify-center flex-grow m-5">
                        <div className="font-semibold text-gray-700">
                            Let's do a mixyboo
                        </div>
                        <div className="text-sm sm:text-center text-gray-900">
                            Give us what you got... we'll do our best to process
                            it.
                        </div>
                    </div>
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                        <svg
                            className="w-8 h-8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span className="mt-2 text-base leading-normal">
                            Select a file
                        </span>
                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => startUpload(e)}
                        />
                    </label>
                </div>
            </div>{' '}
        </React.Fragment>
    );
};
export default FileUpload;
