import { useEffect } from 'react'
import { useRef } from 'react'
import { useAppContext } from '../context'

const SearchForm = () => {
  const { query, updateQuery } = useAppContext()
  const searchRef = useRef()

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  return (
    <section>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="form-input"
          ref={searchRef}
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />
      </form>
    </section>
  )
}
export default SearchForm
