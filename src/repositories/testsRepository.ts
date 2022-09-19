import client from "../app/database";

import { testsCreation } from "../types/tests";

export default class TestRepository {

    async registerTest(userData: testsCreation) {
        await client.tests.create({
            data: {
                name: userData.name,
                pdfUrl: userData.pdfUrl,
                categoryId: userData.categoryId,
                teacherDisciplineId: userData.teacherDisciplineId
            }
        })
    }

    async findByDiscipline() {
        const user = await client.terms.findMany({
            include: {
                disciplines: {
                    include: {
                        teacherDisciplines: {
                            include: {
                                teachers: true,
                                tests: {
                                    include: {
                                        categories: true
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

    async findByTeacher() {
        const tests = await client.teachers.findMany({
            include:{
                teacherDisciplines:{
                    include: {
                        disciplines:{
                            include:{
                                terms: true
                            }
                        },
                        tests:{
                            include: {
                                categories: true
                            }
                        }
                    }
                }
            }
        })

        return tests
    }

}