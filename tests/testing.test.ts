import supertest from 'supertest';
import pkg, { prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'

dotenv.config()

import app from '../src/app/app'
import {
    createUser,
    createUserSmallPassword,
    createUserWrongPassword,
    createUnregisteredLogin
} from './factories/userFactory'


const { PrismaClient } = pkg;
const client = new PrismaClient();
export default client;

describe("Verifica se retorna os testes", () => {
    it("/test/byDiscipline deve retornar os testes", async () => {
        let user = await createUser()

        const create = await supertest(app).post('/signin').send(user)
        delete user.password_confirmation
        const login = await supertest(app).post('/login').send({ email: user.email, password: user.password })

        let token = login.body.Data.jwtToken

        const response = await supertest(app).get('/test/byDiscipline').set('Authorization', token)

        expect(response.status).toBe(200)

    })

    it("/test/byTeacher deve retornar os testes", async () => {
        let user = await createUser()

        const create = await supertest(app).post('/signin').send(user)
        delete user.password_confirmation
        const login = await supertest(app).post('/login').send({ email: user.email, password: user.password })

        let token = login.body.Data.jwtToken

        const response = await supertest(app).get('/test/byTeacher').set('Authorization', token)
        expect(response.status).toBe(200)

    })

})