import React, { useState } from 'react';

const Search = ({ label, onFormSubmit, error }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  }

  return (
    <div className="search">
      <form onSubmit={onSubmit} className="form">
        <div className="field">
          <label>{label}</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
          {error
            ? <div className="msg--error">No results found</div>
            : null
          }
        </div>
      </form>
    </div>
  );
}

export default Search;
