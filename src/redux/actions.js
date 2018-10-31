// Query status

export const searchList = query => ({
  type: "SEARCH_QUERY",
  query
});

export const resetList = () => ({
  type: "KILL_QUERY"
});

// Favorites
