import client from "../app/database";

import { testsCreation } from "../types/tests";

export async function registerTest(userData: testsCreation) {
    await client.tests.create({
        data: {
            name: userData.name,
            pdfUrl: userData.pdfUrl,
            categoryId: userData.categoryId,
            teacherDisciplineId: userData.teacherDisciplineId
        }
    })
}

export async function findByDiscipline(disciplineId: number) {
    const user = await client.disciplines.findMany({
        where: { id: disciplineId }
    })
    return user
}

export async function findByTeacher(teacherId: number) {

}