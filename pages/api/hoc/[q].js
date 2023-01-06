// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SqlQuery } from "res/sql"

export default async function handler(req, res) {
    let { method, query } = req
    if (method === 'GET') {
        let q = "SELECT * FROM hostingorgnization WHERE `HOC`='" + query.q + "'"
        let data = await SqlQuery(q)
        let q2 = "SELECT `internslots`.* FROM `internslots` INNER JOIN `hostingorgnization` ON `hostingorgnization`.`HOC` = `internslots`.`orgcode` WHERE `internslots`.`orgcode` = '" + data[0].HOC + "'"
        let slots = await SqlQuery(q2)
        res.status(200).json({ state: true, data: data[0], slots })
    } if (method === 'POST') {

    } else res.status(404).json({ state: false, msg: "not method " })
}
