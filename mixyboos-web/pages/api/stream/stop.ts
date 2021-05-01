import { NextApiRequest, NextApiResponse } from 'next';
const StopStream = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('stream', 'StopStream', 'BODY', req.body);
    console.log('stream', 'StopStream', 'QUERY', req.query);
    console.log('stream', 'StopStream', 'HEADERS', req.headers);

    res.status(200);
    res.json({ message: 'Stream successfully stopped' });
};

export default StopStream;
