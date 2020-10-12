const API = 'https://api.tvmaze.com/singlesearch/shows';

export const fetchData = query => fetch(`${API}?q=${query}&embed=episodes`);
