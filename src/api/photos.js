const getAllPhotos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Erro ao buscar fotos:", error.message);
  }
};

const getPhoto = async (photoId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${photoId}`,
    );
    const photo = await response.json();
    return photo;
  } catch (error) {
    console.error("Erro ao buscar foto:", error.message);
  }
};
