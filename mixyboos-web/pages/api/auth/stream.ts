import { NextApiRequest, NextApiResponse } from 'next';
const ValidateStreamKey = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('stream', 'ValidateStreamKey', req.body.name);

    if (req.body.name === 'hellosailor') {
        console.log('stream', 'Authorized');
        res.status(200);
        res.json({ success: 'Stream successfully connected' });
    } else {
        res.status(403);
        res.json({ error: 'You are not authorized to use this server' });
    }
};
export default ValidateStreamKey;
