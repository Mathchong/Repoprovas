import { faker } from '@faker-js/faker';

export async function createUser() {
    let user: any = {
        email: faker.internet.email(),
        password: faker.internet.password(10),
    }
    user.password_confirmation = user.password
    return user
}

export async function createUserSmallPassword() {
    let user: any = {
        email: faker.internet.email(),
        password: faker.internet.password(5),
    }
    user.password_confirmation = user.password
    return user
}

export async function createUserWrongPassword() {
    let user: any = {
        email: faker.internet.email(),
        password: faker.internet.password(10),
        password_confirmation: faker.internet.password(10)
    }
    return user
}

export async function createUnregisteredLogin() {
    let user: any = {
        email: faker.internet.email(),
        password: faker.internet.password(10)
    }
    return user
}