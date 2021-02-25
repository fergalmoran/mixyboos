import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';

const USER_COUNT = 100;

const prisma = new PrismaClient();

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

async function main() {
    for (let i = 0; i < USER_COUNT; i++) {
        const user = await prisma.user.create({
            data: {
                name: faker.name.findName(),
                email: faker.internet.email(),
                image: faker.image.avatar(),
            },
        });
        console.log('Created user', user);
        const mixCount = random(0, 50);
        for (let m = 0; m < mixCount; m++) {
            const mix = await prisma.mix.create({
                data: {
                    title: faker.lorem.sentence(),
                    description: faker.lorem.paragraphs(random(1, 5)),
                    image: faker.image.abstract(),
                    userId: user.id,
                },
            });
            console.log('Created mix for user', user.name, mix);
        }
    }
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
