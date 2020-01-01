const db = require('../../../server/db/db')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
    testDb = env.getTestDb()
    return env.initialise(testDb)
  })
  
  afterEach(() => env.cleanup(testDb))

describe('getAllCode func', () => {
    it('getAllCode return an array of 8', () => {
        const expected = 8

        return db.getAllCode(testDb)
            .then(codes => {
                const actual = codes.length
                expect(actual).toBe(expected)
            })
    })
})
