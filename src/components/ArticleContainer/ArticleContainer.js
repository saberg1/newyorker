import './ArticleContainer.css'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticleContainer = (data) => {

  console.log(data.data[0]);
  const articleCards = data.data.map( ele => {
    return (
      <ArticleCard 
        key={ele.id}
        title={ele.title}
        url={ele.url}
        published_date={ele.published_date}
        section={ele.section}
        byline={ele.byline}
        abstract={ele.abstract}
      />
    )
  })

  return(
    <section className='article-container-section'>
      {articleCards}
    </section>
  )
}

export default ArticleContainer

