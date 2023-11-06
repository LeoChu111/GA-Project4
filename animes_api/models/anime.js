const db = require('../db')

function findAll() {
    const sql = `
        SELECT * 
        FROM animes 
        ORDER BY publish_date;
    ` 
    return db.query(sql)
        .then(result => result.rows)
}
function findByKeyword(keyword) {
    const sql = `
        SELECT * 
        FROM animes 
        WHERE title LIKE '%' || $1 || '%';`
     
    return db.query(sql, [keyword])
        .then(result => {
            console.log(result.rows)
            if(result.rowCount === 0) {
                const err = new Error("record not found")
                err.status = 400
                throw err
            }
            return result.rows
        })
}

const Anime = {
    findAll,
    findByKeyword
}

module.exports = Anime