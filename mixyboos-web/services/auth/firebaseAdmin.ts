import admin, { ServiceAccount } from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount: ServiceAccount = {
    projectId: process.env.REACT_APP_FIREBASE_project_id || '',
    privateKey: process.env.REACT_APP_FIREBASE_private_key || '',
    clientEmail: process.env.REACT_APP_FIREBASE_client_email || '',
};

const verifyIdToken = (token: string) => {
    console.log('firebaseAdmin', 'verifyIdToken', process.env);
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: process.env.REACT_APP_FIREBASE_database_url,
        });
    }
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((err) => {
            console.error('firebaseAdmin', 'verifyIdToken', err);
            throw err;
        });
};
export default verifyIdToken;
