import app from '../src/app/app'
import supertest from 'supertest';

describe("teste dos testes", () => {
    it("Retorna 201 ao criar um novo user", async () => {
        const response = await supertest(app).post('/signin').send({
            email: "teste@gmail.com",
            password: "1234567890",
            password_confirmation: "1234567890"
        })
        console.log(response)
    })
})