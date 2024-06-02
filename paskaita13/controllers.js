import db from "./db.js";

export async function addPhone(req, res) {
  const { brand, price, year } = req.body;

  const { rows } = await db.query(
    `insert into phones (brand, price, year) values ('${brand}', ${price}, ${year}) returning *`
  );

  res.json({ data: rows[0] });
}

export async function getPhones(req, res) {
  const { rows } = await db.query("select * from phones");

  //   const { limit }

  res.json(rows);
}
