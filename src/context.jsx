import { createContext, useContext, useReducer, useEffect } from 'react'
import useFetch from './hooks/useFetch'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'
const AppContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext)
}

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    hits: [],
    query: '',
    page: 0,
    nbPages: 0,
  })

  const { loading, error, data } = useFetch(
    `${API_ENDPOINT}query=${state.query}&page=${state.page}`
  )

  const removeStory = (id) => {
    dispatch({ type: 'REMOVE_STORY', payload: id })
  }

  const updateQuery = (text) => {
    dispatch({ type: 'SEARCH_NEWS', payload: text })
  }

  const changePage = (text) => {
    dispatch({ type: 'CHANGE_PAGE', payload: text })
  }

  useEffect(() => {
    dispatch({
      type: 'FETCH_DATA',
      payload: { hits: data.hits, nbPages: data.nbPages },
    })
  }, [data])

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        error,
        removeStory,
        updateQuery,
        changePage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
