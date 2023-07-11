import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`} className="blog-list-item">
      <div className="blog-item-container">
        <img src={imageUrl} alt={title} className="blog-img" />
        <div className="blog-details">
          <h1 className="title-heading">{topic}</h1>
          <h1 className="title-text">{title}</h1>
          <div className="profile-container">
            <img src={avatarUrl} alt={author} className="author-pic" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
