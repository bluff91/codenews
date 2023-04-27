function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }

    case 'REMOVE_STORY':
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      }

    case 'SEARCH_NEWS':
      return {
        ...state,
        query: action.payload,
        page: 0,
      }

    case 'CHANGE_PAGE':
      if (action.payload === 'inc') {
        return {
          ...state,
          page: state.page === state.nbPages - 1 ? 0 : state.page + 1,
        }
      } else if (action.payload === 'dec') {
        return {
          ...state,
          page: state.page === 0 ? state.nbPages - 1 : state.page - 1,
        }
      }
      return {
        ...state,
      }

    default:
      throw new Error(`no matching "${action.type}"`)
  }
}

export default reducer
