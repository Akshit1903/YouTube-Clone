import { useEffect, useState } from "react";
import { AUTOCOMPLETE_SEARCH_API } from "../constants/apis";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchSuggestion } from "./slices/searchSlice";

const useSearchSuggestions = () => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchTitle = useSelector((store) => store.search.searchTitle);
  const dispatch = useDispatch();
  const cachedSearchSuggestions = useSelector(
    (store) => store.search.cachedSearchSuggestions
  );
  useEffect(() => {
    const fetchSearchSuggestions = async () => {
      if (cachedSearchSuggestions[searchTitle] !== undefined) {
        setSearchSuggestions(cachedSearchSuggestions[searchTitle]);
        return;
      }
      const ob = await fetch(AUTOCOMPLETE_SEARCH_API + searchTitle);
      const data = await ob.text();
      const results = [];
      data.split("[").forEach((ele, index) => {
        if (!ele.split('"')[1] || index === 1) return;
        return results.push(ele.split('"')[1]);
      });
      results.pop();
      setSearchSuggestions(results);
      dispatch(cacheSearchSuggestion(results));
      // Akshit bro in the future fix the "k" element bug
    };
    const timer = setTimeout(() => fetchSearchSuggestions(), 250);
    return () => clearTimeout(timer);
  }, [searchTitle, dispatch, cachedSearchSuggestions]);
  return searchSuggestions;
};
export default useSearchSuggestions;
