import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogItemDetails: updatedData, isLoaded: true})
  }

  showBlogItemData = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails
    return (
      <div className="blog-item-details-container">
        <h1 className="blog-item-heading">{title}</h1>
        <div className="profile-container">
          <img src={avatarUrl} alt={author} className="author-pic" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="title-pic" />
        <p className="blog-description">{content}</p>
      </div>
    )
  }

  showLoadingCircle = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoaded} = this.state
    return (
      <div className="blog-info">
        {isLoaded ? this.showBlogItemData() : this.showLoadingCircle()}
      </div>
    )
  }
}

export default BlogItemDetails
