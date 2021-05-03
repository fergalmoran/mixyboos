import formidable from 'formidable';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    console.log('index', 'Upload', form);
    form.maxFileSize = parseInt(process.env.MAX_UPLOAD_MEGABYTES) * 1024 * 1024;

    form.uploadDir = process.env.UPLOAD_DIR;
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        console.log(err, fields, files);
        if (!err) {
            res.status(200);
        } else {
            res.status(500);
        }
        res.json({ fields, files });
    });
};
