export const getAllAlbums = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.error("Erro ao buscar álbuns:", error.message);
  }
};

export const getAlbum = async (albumId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`,
    );
    const album = await response.json();
    return album;
  } catch (error) {
    console.error("Erro ao buscar álbum:", error.message);
  }
};

export const getAlbumPhotos = async (albumId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Erro ao buscar fotos do álbum:", error.message);
  }
};
