import { H3Event } from "h3";
import { User } from "../../types";
import UserModel, {UserDocument} from "../models/User";
import * as bcrypt from 'bcrypt';

export default defineEventHandler(async (event: H3Event) => {

    if (event.node.req.method === "POST") {

        let { userName, password, email, firstName, lastName, role } = await readBody(event);
        try {
            const foundUser = await UserModel.findOne({userName});
            if(foundUser) {
                return {
                    message: "User already exists"
                }
            }
            const salt = await bcrypt.genSalt(10);
            console.log(password)
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log('body', {userName, email, firstName, lastName, role, password: hashedPassword})
            const newUser = await UserModel.create({userName, email, firstName, lastName, role, password: hashedPassword});

            console.log(newUser)
            return {
                message: "Registration successful"
            }
        } catch (error) {
            console.log('ERROR', error)
            return {
                message: "Registration unsuccessful"
            }
        }
    }

});