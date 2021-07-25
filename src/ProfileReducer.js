const ADD_POST =  'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const ProfileReducer = (state, action) => {

    /*
    if(action.type === 'ADD-POST'){
        let newPost = {
            id:4,
            messag: state.newPostText,
            likesCount:0
        };
        state.posts.push(newPost);
        state.newPostText= '';
        
    }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
        state.newPostText = action.newText;
        
    };


    return state;
*/
switch(action.type) {
    case ADD_POST:
        let newPost = {
            id:4,
            messag: state.newPostText,
            likesCount:0
        };
        state.posts.push(newPost);
        state.newPostText= '';
        return state;
     case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
    default:
        return state;    
}
};
export default ProfileReducer;

export  const addPostActionCreator = ()=> ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text)=> ({ type: UPDATE_NEW_POST_TEXT, newText: text});