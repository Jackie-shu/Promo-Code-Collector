const connection = require('./connection')

module.exports = {
    getAllCode,
    getAllWebsite
}

function getAllCode(db = connection) {
    return db('code')
        .join('website','code.website_id','website.id')
        .select('code.id as id', 'website.id as websiteId', 'code.code as code', 'website.name as name', 'website.website as website')
}

