import { v4 as uuidv4 } from 'uuid';

context('Upload', () => {
    beforeEach(() => {
        cy.visit('/mix/upload');
    });

    it('Testing audio file uploading', () => {
        const id = uuidv4();
        cy.server({ method: 'POST' });
        cy.route({
            method: 'POST',
            url: '/api/upload'
        }).as('upload');

        cy.fixture('dmtf_Secs-900_Freq-440_Amp_08.mp3').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent,
                encoding: 'utf-8',
                fileName: `${id}.mp3`,
                mimeType: 'application/octet-stream'
            });
        });

        //wait 2 minutes for the upload
        cy.wait('@upload', { requestTimeout: 120000 });
        cy.server({ enable: false })
    });
});
