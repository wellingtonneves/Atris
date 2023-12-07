import { useState } from "react";
import "./searchbar.css";
const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState(null);

  const handelChange = (input) => {
    setSearchWord(input.target.value);

    let get = `http://localhost:5000/Product?api_key=VEu4DRF1Wwgl54oI4TerpOTq&Name=${searchWord}`;

    console.log(get);

    fetch(get)
    .then((r)=> r.json())
    .then((json)=> {
        setFilterList(json);
    });
  };
  
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
