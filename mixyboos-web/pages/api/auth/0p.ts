import { NextApiRequest, NextApiResponse } from 'next';
import { createContext } from '../../../src/context';
import { v4 as uuidv4 } from 'uuid';
import { generateKey } from '../../../services/utils/crypt';

const context = createContext();

const UpdateLocalAccount = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    // console.log('0p', 'UpdateLocalAccount', req.body);
    const lastLogin = new Date();
    const user = await context.prisma.user.upsert({
        where: { email: req.body.email },
        update: {
            lastLogin
        },
        create: {
            email: req.body.email,
            name: req.body.name,
            image: req.body.picture,
            streamKey: generateKey(16),
            lastLogin: lastLogin,
        },
    });
    console.log('0p', 'User upserted', user);
    res.status(200);
    res.json({ success: user });
};
export default UpdateLocalAccount;
