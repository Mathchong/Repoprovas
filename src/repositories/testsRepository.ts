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

export async function findByDiscipline() {
    const user = await client.terms.findMany({
        select: {
            number: true,
            disciplines: {
                select: {
                    name: true,
                    teacherDisciplines: {
                        select: {
                            teachers: {
                                select: {
                                    name: true,
                                }
                            },
                            tests: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return user
}

export async function findByTeacher(teacherId: number) {

}