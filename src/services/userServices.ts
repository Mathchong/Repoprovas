import jwt from 'jsonwebtoken';

import { registerAccount, findByEmail } from "../repositories/usersRepository";
import { encrypt, matchPassword } from '../utils/bcryptUtils'
import { userCreator, userLogin } from "../types/user";
import "../app/config"

export async function createAccount(userData: userCreator) {

    if(userData.password !== userData.password_confirmation) throw { status: 400, message: "Must send password_confirmation" }
    const user = await findByEmail(userData.email)
    if (user) throw { status: 409, message: "E-mail already in use" }

    userData.password = encrypt(userData.password)

    await registerAccount({ email: userData.email, password: userData.password })
}

export async function login(userData: userLogin) {

    const user = await findByEmail(userData.email)
    if (!user) throw { status: 401, message: "Invalid Credentials" }

    if (!matchPassword(userData.password, user.password)) throw { status: 401, message: "Invalid Credentials" }

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';

    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;

    const payload = {
        userId: user.id,
        email: user.email
    }
    const jwtConfig = {
        expiresIn: EXPIRES_IN
    };

    const token = jwt.sign(payload, SECRET, jwtConfig);

    return token
}