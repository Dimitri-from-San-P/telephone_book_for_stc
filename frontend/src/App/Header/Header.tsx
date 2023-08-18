import React, { useContext, useState } from 'react';
import './Header.css';
import stateContext from '../../reducer/context';

function Header(): JSX.Element {
  const [searchWord, setSearchWord] = useState('');
  const { dispatch } = useContext(stateContext);
  return (
    <div className="header">
      <input
        className="searchInput"
        placeholder="Поиск"
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            dispatch({ type: 'SEARCH_CONTACT', payload: searchWord });
          }
        }}
      />
    </div>
  );
}
export default Header;
