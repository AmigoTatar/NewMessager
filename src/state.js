import {act} from "@testing-library/react";
import ProfileReducer from "./ProfileReducer";
import MessangerPrfReducer from "./MessagesPrfReducer";

/*const ADD_POST =  'ADD-POST'; перенсли в редюсеры
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE ='SEND_MESSAGE';
*/
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messag: 'Hi gondon', likesCount: 10},
                {id: 2, messag: 'You are Pidrilla', likesCount: 12},
                {id: 3, messag: 'Fuck your self', likesCount: 99},
            ],
            newPostText: 'why are you a fagot'

        },
        messagePage: {
            messageData: [
                {id: 1, messag: 'Hi pidor'},
                {id: 2, messag: 'sam pidor'},
                {id: 3, messag: 'I kill your then'},
                {id: 4, messag: 'Ты когда нибудь получал по чеполаъе со скросолть света'},
                {id: 5, messag: 'sosi padla'},
                {id: 6, messag: 'tro ol ol'},
            ],
            dialogsData: [
                {id: 1, name: 'UserName22'},
                {id: 2, name: 'UserName2'},
                {id: 3, name: 'UserName3'},
                {id: 4, name: 'UserName4'},
                {id: 5, name: 'UserName5'},
                {id: 6, name: 'UserName6'},
            ],
            newMessageBody: "Enther text "

        }
    },
    _callSubscriber() {
        console.log('state is change')},
    getState(){
        return this._state;
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.messagePage = MessangerPrfReducer(this._state.messagePage, action);
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    
    }
}

       /* if(action.type === 'ADD-POST'){
            let newPost = {
                id:4,
                messag:this._state.profilePage.newPostText,
                likesCount:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText= '';
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE_NEW_MESSAGE_BODY'){
            this._state.messagePage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === 'SEND_MESSAGE'){
            let body =  this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messageData.push({id:7, messag: body});
            this._callSubscriber(this._state);
        }
    

}}*/
/*export  const addPostActionCreator = ()=> ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text)=> ({ type: UPDATE_NEW_POST_TEXT, newText: text});

export const  sendMessageCreator = ()=> ({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body)=> ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});
 перенесли в  редюсеры изменили импорты в диалогоа и менседжере прф 
*/
export default store;
window.state = store;

//42 000  