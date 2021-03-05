import { atom } from 'recoil';
interface ISiteConfigStore {
    footerOpen: boolean;
}

const siteConfigStore = atom<ISiteConfigStore>({
    key: 'siteConfig',
    default: {
        footerOpen: false,
    },
});

export default siteConfigStore;
