import './ArticleCard.css'

const ArticleCard = ({ url, published_date, section, byline, title, abstract}) => {

  return (
    <article className='article-card-article'>
      <p>{title}</p>
      <p>{url}</p>
      <p>{published_date}</p>
      <p>{section}</p>
      <p>{abstract}</p>
      <p>{byline}</p>
    </article>
  )
}

export default ArticleCard