const connection = require('./connection')

module.exports = {
    getAllCode,
    getAllWebsite
}

function getAllCode(db = connection) {
    return db('code')
}

function getAllWebsite(db = connection) {
    return db('website')
}