import React, { useEffect, useState } from "react";
import {
  HAMICONURL,
  YTLOGOURL,
  USERLOGOURL,
  suggestion_API_YT,
} from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSideBar = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionArray, setSuggestionArray] = useState([]);
  const [showSuggestion, setShowSuggetion] = useState(false);
  // console.log("serach Query");
  //console.log(searchQuery);

  const serachChache = useSelector((store) => store.search);
  //debouncing

  useEffect(() => {
    const timer = setTimeout(() => {
      if (serachChache[searchQuery]) {
        setSuggestionArray(serachChache[searchQuery]);
      } else {
        suggestionAPiYT();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const suggestionAPiYT = async () => {
    try {
      console.log("AP call- " + searchQuery);
      const result = await fetch(suggestion_API_YT + searchQuery);
      if (!result.ok) throw new Error(`HTTP error! Status: ${result.status}`);
      const data = await result.json();
      const dataArray = data[1];
      setSuggestionArray(dataArray);
      //update serach cache
      dispatch(
        cacheResults({
          [searchQuery]: dataArray,
        })
      );
      //console.log("YT Suggestion API", data[1]);
    } catch (error) {
      console.error("Error fetching YT Suggestions:", error);
    }
  };
  return (
    <div className="flex justify-between h-[70px] shadow-md">
      <div className="flex">
        <img
          className="h-[40px] items-center mt-3 w-auto p-2 m-1 hover:cursor-pointer"
          src={HAMICONURL}
          alt="menu"
          onClick={toggleSideBar}
        ></img>
        <img
          className="h-[40px] items-center mt-3 w-auto p-2 m-1"
          src={YTLOGOURL}
          alt="yt-logo"
        ></img>
      </div>
      <div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggetion(true)}
          onBlur={() => setShowSuggetion(false)}
          className=" mt-3 p-2 w-[35rem] border border-gray-400 rounded-l-full"
          type="text"
          placeholder="Search"
        ></input>

        <button className="p-2 border border-gray-400 rounded-r-full">
          🔍
        </button>

        {suggestionArray.length > 0 && showSuggestion && (
          <ul className="absolute z-50 mt-3 p-2 w-[35rem] bg-white shadow-lg rounded-xl">
            {suggestionArray.map((sug) => (
              <li className="mt-2 p-2 w-[34rem] font-bold hover:cursor-pointer hover:bg-gray-100">
                🔍 {sug}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img
          className="h-[60px] w-auto m-1 p-2"
          src={USERLOGOURL}
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
