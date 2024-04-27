const getAllTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error.message);
  }
};

const getTodo = async (todoId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    );
    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Erro ao buscar tarefa:", error.message);
  }
};
