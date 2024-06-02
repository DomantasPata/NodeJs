const users = [
  {
    name: "Tomas",
    age: 30,
  },
];

export function getUsers(req, res) {
  res.json(users);
}

export function addNewUser(req, res) {
  const body = req.body;

  users.push(body);

  res.json({
    success: true,
  });
}
