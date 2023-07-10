import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/EmojiApi";

export default function SearchFilter({ handleChangeOption }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data.data));
  }, []);

  const selectCategories =
    categories.length !== 0
      ? categories.map((data) => {
          return (
            <option key={data.slug} value={data.slug}>
              {data.slug}
            </option>
          );
        })
      : null;

  return (
    <select onChange={(event) => handleChangeOption(event.target.value)}>
      <option value={"all"}>All</option>
      {selectCategories}
    </select>
  );
}
