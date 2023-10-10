import { readJson } from 'fs-extra'

export const login = async (username, password) => {

  const users = JSON.parse(await readJson('./users.json'));

  // Find the user by username or email
  const user = users.find(
    (u) =>
      u.username === username
  );

  if (!user) {
    return null; 
  }

  // Check if the entered password matches the hashed password
  if (password === user.password) {
    return user; 
  } else {
    return null; 
  }
};
