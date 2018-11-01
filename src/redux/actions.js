// Query status

export const searchList = query => ({
  type: "SEARCH_QUERY",
  query
});

export const resetList = () => ({
  type: "KILL_QUERY"
});

export const toGridView = () => ({
  type: "GRID_VIEW"
});

export const toVerticalView = () => ({
  type: "VERTICAL_VIEW"
});

// Favorites
