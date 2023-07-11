import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedData = data.map(eachDataItem => ({
      id: eachDataItem.id,
      title: eachDataItem.title,
      imageUrl: eachDataItem.image_url,
      avatarUrl: eachDataItem.avatar_url,
      author: eachDataItem.author,
      content: eachDataItem.content,
      topic: eachDataItem.topic,
    }))

    this.setState({blogsList: formattedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachBlog => (
            <BlogItem key={eachBlog.id} details={eachBlog} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
