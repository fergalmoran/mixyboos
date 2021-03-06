import { NextApiRequest, NextApiResponse } from 'next';
const ValidateStreamKey = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('stream', 'ValidateStreamKey', 'BODY', req.body);
    console.log('stream', 'ValidateStreamKey', 'QUERY', req.query);
    console.log('stream', 'ValidateStreamKey', 'HEADERS', req.headers);
    const key = req.query.name;
    if (key === 'hellosailor') {
        console.log('stream', 'Authorized');
        res.status(200);
        res.json({ success: 'Stream successfully connected' });
    } else {
        console.log('stream', 'Forbidden');
        res.status(403);
        res.json({ error: 'You are not authorized to use this server' });
    }
};
export default ValidateStreamKey;
