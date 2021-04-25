import React from 'react';
import Posts from './Post/Posts';


const MyPosts = (props) => {

let postsElement = props.posts.map(post => <Posts message={post.messag}  likesCount={post.likesCount}/> );

    return(
    <div>
     { postsElement}
    </div>			

    )
}

export default MyPosts;