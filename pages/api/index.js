// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SqlQuery } from "res/sql"

export default async function handler(req, res) {

  let data = await SqlQuery('SELECT * FROM `hostingorgnization`')
  res.status(200).json(data)
}
