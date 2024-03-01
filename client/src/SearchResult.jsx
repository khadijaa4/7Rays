import React from 'react'

export const SearchResult = ({result}) => {
    if (!result || !result.name) {
        return null;
    }
  return <div>{result.name}</div>;
};