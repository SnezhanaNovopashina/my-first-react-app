import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post messageText={post.messageText} likesCount={post.likesCount} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    };

    return (
        <div className={style.communication}>
            <div className={style.newpost}>
                <form>
                    <label htmlFor='message'>New Post</label>
                    <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} id='message' name='message' cols='100' rows='3' maxLength='1000' placeholder='Text me something' />
                    <button type='button' onClick={ onAddPost }>Post!</button>
                </form>
            </div>
            <div className={style.wall}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;

// action='#' method='post'