import { useAppContext } from '../context'

const Buttons = () => {
  const { loading, page, nbPages, changePage } = useAppContext()

  return (
    <section className="btn-container">
      <button onClick={() => changePage('dec')} disabled={loading}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => changePage('inc')} disabled={loading}>
        next
      </button>
    </section>
  )
}
export default Buttons
