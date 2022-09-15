import { testsCreation } from "../types/tests";

import {registerTest} from '../repositories/testsRepository'

export default class TestsService {
    async create(test: testsCreation){
        await registerTest(test)
    }

    async findByDiscipline() {

    }

    async findByTeacher() {

    }
}