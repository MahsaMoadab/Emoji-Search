import { useEffect, useState } from "react";
import SearchInput from "./SearchInput/SearchInput";
import SearchFilter from "./SearchFilter/SearchFilter";
import ToggleViewButton from "./ToggleViewButton/ToggleViewButton";
import useViewMode from "../../utils/useViewMode";
import CartView from "../View/CartView";
import GridView from "../View/GridView";
import {
  getAllEmoji,
  getEmojiCategoryList,
  getEmojiSearchList,
} from "../api/EmojiApi";
import EmojiDetail from "../Modal/EmojiDetail";
import Loading from "../Loading/Loading";

export default function Content() {
  const [view, toggleView] = useViewMode();
  const [emoji, setEmoji] = useState([]);
  const [details, setDetails] = useState(null);
  const [nothing, setNothing] = useState(false);
  const [loading, setLoading] = useState(true);

  const reloadFetchEmoji = () => {
    setLoading(true);
    setEmoji([]);
    setNothing(false);
  }

  const setAllEmoji = () => {
    reloadFetchEmoji();
    getAllEmoji()
      .then((data) => {
        setLoading(false);
        if (data.data !== null) {
          setEmoji(data.data);
          setNothing(false);
        } else {
          setEmoji([]);
          setNothing(true);
        }
      });
  };

  useEffect(() => {
    setAllEmoji();
    handleChangeParams();
  }, []);


  const handleChangeOption = (option) => {
    reloadFetchEmoji();
    if (option === "all") return setAllEmoji();
    return getEmojiCategoryList(option)
      .then((data) => {
        setLoading(false);
        if (data.data !== null) {
          setEmoji(data.data);
          setNothing(false);
        } else {
          setEmoji([]);
          setNothing(true);
        }
      });
  };

  const handleChangeParams = (query) => {
    reloadFetchEmoji();
    if (query !== "")
      return getEmojiSearchList(query)
        .then((data) => {
          setLoading(false);
          if (data.data !== null) {
            setEmoji(data.data);
            setNothing(false);
          } else {
            setEmoji(data.data);
            setNothing(true);
          }
        });
  };

  const handleModalDetails = (emoji) => {
    setDetails(emoji);
  };

  return (
    <div className="content">
      <div className="content_box">
        <SearchInput handleChangeParams={handleChangeParams} />
        <div className="content_filter">
          <SearchFilter handleChangeOption={handleChangeOption} />
          <ToggleViewButton view={view} toggleView={toggleView} />
        </div>
        <>
          {loading && <Loading />}
          {nothing ? (
            <div className="not_found">
              <img src="./assets/images/nothing.svg" alt="" />
              <span>Not Found!!!</span>
            </div>
          ) : view === "card" ? (
            <CartView data={emoji} handleModalDetails={handleModalDetails} />
          ) : (
            <GridView data={emoji} handleModalDetails={handleModalDetails} />
          )}
        </>

        {details && (
          <EmojiDetail data={details} closeButton={() => setDetails(null)} />
        )}
      </div>
    </div>
  );
}
