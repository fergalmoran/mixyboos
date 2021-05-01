import { NextApiRequest, NextApiResponse } from 'next';
const StartStream = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('stream', 'StartStream', 'BODY', req.body);
    console.log('stream', 'StartStream', 'QUERY', req.query);
    console.log('stream', 'StartStream', 'HEADERS', req.headers);
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
export default StartStream;
