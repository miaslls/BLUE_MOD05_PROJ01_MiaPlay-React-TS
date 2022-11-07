import "./AdminGenreListItem.css";

import { AdminGenreListItemProps } from "./types";

import { Genre } from "../../../api/types/genre";
import GenreService from "../../../api/services/GenreService";

const AdminGenreListItem = ({
  genre,
  genreIconMode,
  setGenreFormState,
  setShowGenreForm,
  getAllGenres,
}: AdminGenreListItemProps) => {
  // 📌 handleEdit

  const handleEdit = (genre: Genre) => {
    setGenreFormState({ id: genre._id, name: genre.name });
    setShowGenreForm(true);
  };

  // 📌 handleRemove

  const handleRemove = async (id: string) => {
    await GenreService.remove(id);
    getAllGenres();
  };

  // 📌📌📌🚨 return

  return (
    <>
      <li className="admin-genre-list-item">
        <div className="admin-genre-name">{genre.name}</div>
        {genreIconMode === "delete" && (
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleRemove(genre._id)}
          >
            <i className="bi bi-x"></i>
          </div>
        )}

        {genreIconMode === "edit" && (
          <div
            className="admin-game-options-icon clickable"
            onClick={() => handleEdit(genre)}
          >
            <i className="bi bi-pencil"></i>
          </div>
        )}
      </li>
    </>
  );
};

export default AdminGenreListItem;
