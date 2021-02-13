import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
} from "sequelize";
import { ShorthandPropertyAssignment } from "typescript";

const sequelize = new Sequelize("mysql://root:asd123@localhost:3306/mydb");

interface IUser {
    id: string;
    name: string;
    email: string;
    slug: string;
}

class User extends Model<IUser> implements IUser {
    public id!: string;
    public name: string;
    public email: string;
    public slug: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        slug: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    },
    {
        tableName: "users",
        sequelize, // passing the `sequelize` instance is required
    }
);

export default User;
