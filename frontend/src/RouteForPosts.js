import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostsForm from './Components/Users/PostsForm'
import ImageForm from './Components/Users/ImageForm'

const RouteForPosts = () => {
  return (
    <Switch>
    <Route path='new/text' component={PostsForm} />
    <Route path='new/photo' component={ImageForm} />
    </Switch>
  )
}




export default RouteForPosts
