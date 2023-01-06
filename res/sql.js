let { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env
let config = {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    // port: 3307
}
const mysql = require('serverless-mysql')({ config })




export async function SqlQuery(q) {
    await mysql.connect()
    let results = await mysql.query(q)
    await mysql.end()
    return results
} 