const getAllPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error.message);
  }
};

const getPost = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Erro ao buscar post:", error.message);
  }
};

const getPostComments = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    );
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("Erro ao buscar comentários:", error.message);
  }
};
