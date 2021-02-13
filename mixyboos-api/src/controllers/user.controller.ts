import { User } from "../models";

const userController = {
    getUser: async (req: any, res: any) => {
        console.log('user.controller', 'getUser', req);
        const { id } = req.params;

        const user = await User.findOne({
            where: {
                id,
            },
        });

        if (!user) {
            return res.status(400).send({
                message: `No user found with the id ${id}`,
            });
        }

        return res.send(user);
    },
};

export default userController;
