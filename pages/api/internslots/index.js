// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SqlQuery } from "res/sql"

export default async function handler(req, res) {
    let { method, body } = req
    console.log(method);
    if (method === 'GET') {
        let data = await SqlQuery(`SELECT COUNT(*) AS num FROM 'internslots' WHERE orgcode = '${HOC}'`)
        res.status(200).json({ state: true, data })
    } if (method === "POST") {
        let { orgcode, orgname, major, alt_major, location, building, WAT, gender, supervisor, slots } = body
        let q = "INSERT INTO `internslots` (`orgcode`, `orgname`, `major`, `alt_major`, `location`, `building`, `WAT`, `gender`, `supervisor`, `slots`) VALUES " + `('${orgcode}', '${orgname}', '${major}', '${alt_major}', '${location}', '${building}', '${WAT}', '${gender}', '${supervisor}', '${slots}')`;

        await SqlQuery(q)
        res.status(200).json({ state: true, data: body })

    } if (method === "DELETE") {
        let { orgcode } = body
        let q = "DELETE FROM `internslots` WHERE `id`=" + orgcode

        await SqlQuery(q)
        res.status(200).json({ state: true, data: body })


    } else res.status(404).json({ state: false, msg: "not method " })
}
