import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeHolder, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
