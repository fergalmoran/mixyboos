import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    // form.maxFileSize = parseInt(process.env.MAX_UPLOAD_MEGABYTES) * 1024 * 1024;
    form.uploadDir = './.cache/uploads';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(err, fields, files);
    });
};
