export const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
};

export const getUser = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
};

export const getUserAlbums = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`,
    );
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.error("Erro ao buscar álbuns do usuário:", error.message);
  }
};

export const getUserTasks = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Erro ao buscar tarefas do usuário:", error.message);
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts do usuário:", error.message);
  }
};
