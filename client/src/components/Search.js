import React, { useState, useEffect } from 'react';
import './Search.scss';

const Search = ({ label, onFormSubmit, error }) => {
  const [term, setTerm] = useState('');
  const [floatingLabel, setFloatingLabel] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  }

  useEffect( () => {
    term !== '' ? setFloatingLabel(' search__input-group--active') : setFloatingLabel('');
  }, [term]);

  return (
    <div className={`search${error ? ' search--error' : ''}`}>
      <form onSubmit={onSubmit} className="form">
        <div className={`search__input-group${floatingLabel}`}>
          <label className="search__input-label">
            {label}
          </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="search"
            aria-label="Search"
            className="search__input"
          />
          <button type="submit" className="search__button" value="submit">
            <svg className="icon" viewBox="0 0 24 24"><title>Search</title><g strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" stroke="currentColor" fill="none" strokeMiterlimit="10"><line x1="22" y1="22" x2="15.656" y2="15.656"></line><circle cx="10" cy="10" r="8"></circle></g></svg>
          </button>
          {error
            ? <div className="search__error">No results found</div>
            : null
          }
        </div>
      </form>
    </div>
  );
}

export default Search;
