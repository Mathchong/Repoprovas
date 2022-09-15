import app from '../src/app/app'
import supertest from 'supertest';

describe("teste dos testes", () => {
    it("Retorna 201 ao criar um novo user", async () => {
        const response = await supertest(app).post('/signin').send({
            email: "teste@gmail.com",
            password: "1234567890",
            password_confirmation: "1234567890"
        })
        expect(response.status).toBe(409)
    })
})

describe("Deve retornar token de autenticação em caso de login", async () => {
    it("Senha correta", async () => {
        const response = await supertest(app).post('/login').send({
            email: "teste@gmail.com",
            password: "1234567890"
        })
        expect(response.status).toBe(200)
    })

    it('Cadastra prova', async()=>{
        const response = await supertest(app).post('/test/').send({
            
        })
    })
})
