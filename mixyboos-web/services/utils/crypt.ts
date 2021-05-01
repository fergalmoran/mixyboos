import * as crypto from 'crypto';

const generateKey = (length: number = 16) =>
    crypto.randomBytes(length).toString('hex');

export {generateKey}


