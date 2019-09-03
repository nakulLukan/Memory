const task = require('./task.service');

// mock functions
const mockSquare = jest.fn(async ()=> {
    return [{
        name : 'take a coffee',
        status: false,
        description: ''
    }];
});

describe('Todos', () => {
    it('getAllTodos() returns an array', async (done) => {
        const values = await task.getAllTodos();
        expect(values).toBeDefined();
        expect(values).not.toBeNull();
        expect(typeof values).toBe('object');
        done();
    });
});
