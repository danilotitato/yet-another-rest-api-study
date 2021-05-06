const httpMocks = require('node-mocks-http')
const todoController = require('../../src/controllers/todo.controller')
const todoModel = require('../../src/models/todo.model')
const newTodo = require('../mockData/newTodo.json')

todoModel.create = jest.fn()

describe('todoController.createTodo', () => {
    it('should have a createTodo function', () => {
        expect(typeof todoController.createTodo).toBe('function')
    })
    it('should call todoModel.create', () => {
        let req, res, next

        req = httpMocks.createRequest()
        res = httpMocks.createResponse()
        next = undefined

        req.body = newTodo

        todoController.createTodo(req, res, next)

        expect(todoModel.create).toBeCalledWith(newTodo)
    })
})