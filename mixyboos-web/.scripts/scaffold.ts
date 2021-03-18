import { checkDocument } from '@apollo/client/utilities';
import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';
import { MultiBar, Presets, SingleBar } from 'cli-progress';
import colors from 'colors';

import * as faker from 'faker';

const createBarManager = (format: string) =>
    new SingleBar(
        {
            format: format,
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
            hideCursor: true,
        },
        Presets.shades_classic
    );

const USER_COUNT = 200;
const MAX_MIX_COUNT = 50;

const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const _scaffoldInternal = async () => {
    const prisma = new PrismaClient();
    const progress = createBarManager(
        'Scaffolding database |' +
            colors.cyan('{bar}') +
            '| {percentage}% | Creating user {user} || Mix {mc} of {mt}'
    );
    progress.start(USER_COUNT, 1);

    for (let i = 1; i <= USER_COUNT; i++) {
        const user = await prisma.user.create({
            data: {
                name: faker.name.findName(),
                email: faker.internet.email(),
                image: faker.internet.avatar(),
            },
        });
        const mixCount = random(0, MAX_MIX_COUNT);
        for (let m = 1; m <= mixCount; m++) {
            const mix = await prisma.mix.create({
                data: {
                    title: faker.lorem.sentence(),
                    description: faker.lorem.paragraphs(random(1, 5)),
                    image: faker.image.abstract(),
                    userId: user.id,
                },
            });
            progress.update(i, {
                user: user.name,
                mc: m,
                mt: mixCount,
            });
        }
    }
    progress.stop();
    console.log('Creating activity');
    const mixes = await prisma.mix.findMany({});
    const activityProgress = createBarManager(
        'Scaffolding activity |' +
            colors.cyan('{bar}') +
            '| {percentage}% | Creating activity {play}'
    );
    activityProgress.start(mixes.length, 1);
    mixes.forEach(async (m) => {
        try {
            const playCount = random(0, 10);
            for (let i = 1; i <= playCount; i++) {
                const users = await prisma.user.findMany({
                    skip: random(0, USER_COUNT - 1),
                    take: 1,
                });
                if (users.length !== 0) {
                    const play = await prisma.plays.create({
                        data: {
                            sourceIp: '109.255.216.213',
                            userId: users[0].id,
                            mixId: m.id,
                        },
                    });
                } else {
                    console.log('scaffold', 'unable to find random user');
                }
            }
            const shareCount = random(0, 99);
            for (let i = 1; i <= shareCount; i++) {
                const users = await prisma.user.findMany({
                    skip: random(0, USER_COUNT - 1),
                    take: 1,
                });
                if (users.length !== 0) {
                    const shares = await prisma.shares.create({
                        data: {
                            userId: users[0].id,
                            mixId: m.id,
                        },
                    });
                } else {
                    console.log('scaffold', 'unable to find random user');
                }
            }
            const favouriteCount = random(0, 10000);
            for (let i = 1; i <= favouriteCount; i++) {
                const users = await prisma.user.findMany({
                    skip: random(0, USER_COUNT - 1),
                    take: 1,
                });
                if (users.length !== 0) {
                    const shares = await prisma.favourites.create({
                        data: {
                            userId: users[0].id,
                            mixId: m.id,
                        },
                    });
                } else {
                    console.log('scaffold', 'unable to find random user');
                }
            }
            activityProgress.increment();
        } catch (err) {
            console.log('scaffold', 'Error', err);
        }
    });

    await prisma.$disconnect();
};
async function main() {
    exec('npx prisma migrate reset --force --preview-feature');
    setTimeout(async () => {
        await _scaffoldInternal();
    }, 1000);
}

main()
    .then(() => {})
    .catch((e) => {
        throw e;
    });
