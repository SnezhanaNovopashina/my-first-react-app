import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;