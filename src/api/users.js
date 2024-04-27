const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
  }
};

const getUser = async (userId) => {
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

const getUserAlbums = async (userId) => {
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

const getUserTodos = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
    );
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error("Erro ao buscar tarefas do usuário:", error.message);
  }
};

const getUserPosts = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
    );
  } catch (error) {
    console.error("Erro ao buscar posts do usuário:", error.message);
  }
};
