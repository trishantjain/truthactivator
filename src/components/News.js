import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import './App.css'



const News = (props) => {

  const [ch, setCh] = useState('light')

    // eslint-disable-next-line
    const togglech = () => {

        if (ch=== 'light') {
            setCh('dark');
            document.body.style.backgroundColor = 'white';

        }
        else {
            setCh('light');
            document.body.style.backgroundColor = 'black';
        }
    }
  

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=67870b7b6e064f6fb36cb5dcff691fa6&page=1&pageSize=${props.pageSize}`;
    setLoading(true)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)

  }

  useEffect(() => {
    updateNews();
  }, [])

  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews();
  // }  

  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=67870b7b6e064f6fb36cb5dcff691fa6&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)

  };


  return (
    <div className={`container `}>
      <h2 className={`text-center my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Truth Activator</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <Newsitem mode={props.mode} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* Buttons to shift to Previous page & Next page */}
      {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
          <button disabled={((page + 1 > Math.ceil(totalResults / props.pageSize)))} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
        </div> */}
    </div>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  // author: "Truth Activator"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News