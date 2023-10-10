import { readJson, writeJson } from 'fs-extra'

export const register = async (username, password) => {


  // Create a user object
  const user = {
    username,
    password,
  };

  // Save the user to the JSON file
  const users = JSON.parse(await readJson('./users.json'));
  users.push(user);
  await writeJson('./users.json', JSON.stringify(users, null, 2));
};
