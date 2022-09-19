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


afterAll(() => {
    client.$disconnect
})

describe("Testa o Cadastro do Usuário", () => {
    it("Retorna 201 ao criar um novo user", async () => {
        const user = await createUser();

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(201)
    })

    it("Retorna 400 caso enviar user sem e-mail", async () => {
        const user = await createUser();
        delete user.email

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar user sem password", async () => {
        const user = await createUser()
        delete user.password

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar user sem password_confirmation", async () => {
        const user = await createUser()
        delete user.password_confirmation

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar sem user", async () => {
        const response = await supertest(app).post('/signin')
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar com informações a mais", async () => {
        const user = await createUser()
        user.cpf = 12345678901

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar com senha menor que 10 caracteres", async () => {
        const user = await createUserSmallPassword()

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)
    })

    it("Retorna 400 caso enviar com password_confirmation diferente de password", async () => {
        const user = await createUserWrongPassword()

        const response = await supertest(app).post('/signin').send(user)
        expect(response.status).toBe(400)

    })
})

describe("Testa o Login do usuário", () => {
    it("Retorna 200 caso email e senha enviados corretamente", async () => {
        let user = await createUser()

        const create = await supertest(app).post('/signin').send(user)

        delete user.password_confirmation
        const response = await supertest(app).post('/login').send({ email: user.email, password: user.password })

        expect(response.status).toBe(200)
    })
    it("Retorna 401 caso email não exista", async () => {
        let user = await createUnregisteredLogin()

        const response = await supertest(app).post('/login').send(user)
        expect(response.status).toBe(401)
    })
    it("Retorna 401 caso senha estiver incorreta", async () => {
        let user = await createUser()

        const create = await supertest(app).post('/signin').send(user)

        delete user.password_confirmation
        user.password = "NewWrongPassword"
        const response = await supertest(app).post('/login').send(user)

        expect(response.status).toBe(401)

    })
    it("Retorna 400 caso enviar sem e-mail", async () => {
        const user = await createUser()

        delete user.password_confirmation
        delete user.email
        const response = await supertest(app).post('/login').send(user)

        expect(response.status).toBe(400)
    })
    it("Retorna 400 caso enviar sem senha", async () => {
        const user = await createUser()

        delete user.password_confirmation
        delete user.password
        const response = await supertest(app).post('/login').send(user)

        expect(response.status).toBe(400)
    })
    it("Retorna 400 caso enviar sem body", async () => {
        const response = await supertest(app).post('/login')

        expect(response.status).toBe(400)
    })

})
