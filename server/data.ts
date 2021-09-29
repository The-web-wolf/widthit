enum Roles {
  read = 'read',
  write = 'write',
  amin = 'amin'
}

export const users = [
  {
    id: "00001",
    username: "admin",
    email: "user@organization.com",
    password: "admin"
  }
];

export const employees = [
  {
    id: "001",
    name: "Jonas Jonaitis",
    role: Roles.amin,
    email: "email123",
    createdAt: new Date().toISOString()
  },
  {
    id: "002",
    name: "Petras Petraitis",
    role: Roles.read,
    email: "test@test.com",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString()
  },
  {
    id: "003",
    name: "Povilas Povilaitis",
    role: Roles.read,
    email: "email123",
    createdAt: new Date().toISOString()
  },
  {
    id: "004",
    name: "Juozas Juozaitis",
    role: Roles.amin,
    email: "test@gmail.com",
    createdAt: new Date().toISOString()
  },
  {
    id: "005",
    name: "Tomas Tomaitis",
    role: Roles.amin,
    email: "Vardenis2000@gmail.com",
    createdAt: new Date().toISOString()
  },
  {
    id: "006",
    name: "Giedrius Giedraitis",
    role: Roles.write,
    email: "Vardenis2@gmail.com",
    createdAt: new Date().toISOString()
  },
  {
    id: "007",
    name: "Justas Justaitis",
    role: Roles.amin,
    email: "email@gmail.com",
    createdAt: new Date().toISOString()
  },
  {
    id: "008",
    name: "Laurynas Laurinaitis",
    role: Roles.amin,
    email: "pavardenis321@gmail.com",
    createdAt: new Date().toISOString()
  },
  {
    id: "009",
    name: "Gerda Gerdaitė",
    role: Roles.write,
    email: "discordemail123@gmail.com.",
    createdAt: new Date().toISOString()
  },
  {
    id: "010",
    name: "Kristina Kristinaitė",
    role: Roles.read,
    email: "pass1",
    createdAt: new Date().toISOString()
  }
];


