const todoController = require('../../src/controllers/todo.controller')
const todoModel = require('../../src/models/todo.model')

todoModel.create = jest.fn()

describe('todoController.createTodo', () => {
    it('should have a createTodo function', () => {
        expect(typeof todoController.createTodo).toBe('function')
    })
    it('should call todoModel.create', () => {
        todoController.createTodo()
        expect(todoModel.create).toBeCalled()
    })
})