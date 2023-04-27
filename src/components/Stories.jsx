import { useAppContext } from '../context'

const Stories = () => {
  const { loading, error, hits, removeStory } = useAppContext()

  if (loading) {
    return <div className="loading"></div>
  }

  if (error) {
    return <div>Error...(to be added to)</div>
  }

  if (!hits) {
    return <div className="loading"></div>
  }

  return (
    <section className="stories">
      {hits.map((item) => {
        const { author, title, url, objectID: id, num_comments, points } = item
        return (
          <article className="story" key={id}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author}</span> | {num_comments} comments
            </p>
            <div>
              <a
                className="read-link"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
              <button className="remove-btn" onClick={() => removeStory(id)}>
                Remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default Stories
