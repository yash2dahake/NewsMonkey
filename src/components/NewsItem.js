import React from 'react'

const NewsItem = (props)=> {

  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-success"> {source} </span>
        </div>
        <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/iphone-representationalpng-011411-16x9.png?VersionId=djIH8q13DvYWfUl8Jk4Omir7WdLAgVo6" : imageUrl}
          className="card-img-top" alt="..." />
        <div className="card-body">

          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small>
          </p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem