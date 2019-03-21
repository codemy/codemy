import * as React from 'react'
import { FunctionComponent, useState, useEffect, Dispatch } from 'react'

import PostProps from 'typings/post'

import Post from './post'

const getPosts = async (callback: Dispatch<Array<PostProps>>) => {
  const response = await fetch('https://www.codemy.net/v1/posts/search/page/1')
  const json = await response.json()

  callback(json.data)
}

const RecentUploads: FunctionComponent = () => {
  const [posts, setPosts] = useState<Array<PostProps>>([])

  useEffect(() => { getPosts(setPosts) }, [])

  if (posts.length === 0) return (
    <div>Loading...</div>
  )

  return (
    <div className='container mx-auto'>
      {posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  )
}

export default RecentUploads