import { users } from '@prisma/client';
export type userCreator = {
    email: string;
    password: string;
    password_confirmation: string;
}

export type userLogin = Omit<users, 'id'>