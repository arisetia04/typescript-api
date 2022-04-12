import {
    Table,
    Column,
    Model,
    PrimaryKey
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { Optional } from "sequelize";
export interface UserAttributes {
    id?: string;
    name: string;
    email: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
    modelName: "User",
    tableName: "users",
    timestamps: true,
    paranoid: true
})
class User extends Model<UserAttributes, UserCreationAttributes> {
    @PrimaryKey
    @Column({ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 })
    id!: string;

    @Column({ type: DataTypes.STRING })
    name!: string;

    @Column({ type: DataTypes.STRING, allowNull: false, unique: true })
    email!: string;

    @Column({ type: DataTypes.STRING })
    password!: string;
}

export default User;
