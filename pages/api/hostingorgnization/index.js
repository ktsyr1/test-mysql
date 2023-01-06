// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SqlQuery } from "res/sql"

export default async function handler(req, res) {
    let { method, body } = req
    console.log(method);
    if (method === 'GET') {
        let data = await SqlQuery('SELECT * FROM `hostingorgnization`')
        data = await Promise.all(data.map(async a => {
            let q = "SELECT COUNT(*) AS num FROM `internslots` WHERE orgcode = " + `'${a?.HOC}'`
            let num = await SqlQuery(q)
            a['num'] = num[0].num
            return a
        }))

        res.status(200).json({ state: true, data })
    } if (method === "POST") {
        let { HOC, HON, BL, GM, Dept, Slid, Slname, Spnumber, Smnumber, Tclid, Tcpnumber, Tcmnumber } = body
        let q = "INSERT INTO `hostingorgnization` (`HOC`, `HON`, `BL`, `GM`, `Dept`, `Slid`, `Slname`, `Spnumber`, `Smnumber`, `Tclid`, `Tcpnumber`, `Tcmnumber`) VALUES " + `('${HOC}', '${HON}', '${BL}', '${GM}', '${Dept}', '${Slid}', '${Slname}', '${Spnumber}', '${Smnumber}', '${Tclid}', '${Tcpnumber}', '${Tcmnumber}')`;
        let data = await SqlQuery(q)
        
        res.status(200).json({ state: true, data:body })

    } if (method === 'DELETE') {
        let q = "DELETE FROM `internslots` WHERE `orgcode`= " + `'${a?.HOC}'`
        let data = await SqlQuery(q)
        // null 

    } else res.status(404).json({ state: false, msg: "not method " })
}
