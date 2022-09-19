import { Request, Response } from "express";

import TestsService from "../services/testService";

const tests = new TestsService();

export default class TestsController {
    async create(req: Request, res: Response) {

        await tests.create(req.body)

        res.status(201).json({ status: 201, message: "Created" })
    }

    async getByDiscipline(req: Request, res: Response) {

        const filteredTests = await tests.findByDiscipline()

        res.status(200).json({ status: 200, message: "Data Found", Data: filteredTests })
    }

    async getByTeacher(req: Request, res: Response) {

        const filteredTests = await tests.findByTeacher()

        res.status(200).json({ status: 200, message: "Data Found", Data: filteredTests })
    }
}