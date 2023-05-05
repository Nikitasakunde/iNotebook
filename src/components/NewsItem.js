import React from 'react'

const NewsItem =(props)=> {
 


    let {title , description , imageurl , newsUrl , author , date , source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div>
              <span className='badge rounded-pill bg-danger' style={{display:"flex" , justifyContent:'center', position:'absolute' , right:0}}>{source}</span>
          </div>
              <img src={!imageurl?"https://www.acdif.fr/wp-content/uploads/2018/06/breaking-news-broadcast-graphics-title-footage-009796250_prevstill.jpeg":imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author? author :"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target ="_blank" className="btn btn-sn btn-dark">Read More</a>
              </div>
        </div>
      </div>
    )
}

export default NewsItem
