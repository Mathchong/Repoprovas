import { testsCreation } from "../types/tests";

import TestRepository from '../repositories/testsRepository'

const tests = new TestRepository();

export default class TestsService {
    async create(test: testsCreation) {
        await tests.registerTest(test)
    }

    async findByDiscipline() {
        const filteredTests = await tests.findByDiscipline()

        return filteredTests
    }

    async findByTeacher() {
        const filteredTests = await tests.findByTeacher()

        return filteredTests
    }
}