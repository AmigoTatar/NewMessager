let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messag: 'Hi gondon', likesCount: 10},
                {id: 2, messag: 'You are Pidrilla', likesCount: 12},
                {id: 3, messag: 'Fuck your self', likesCount: 99},
            ],
            newPostText: 'why are you a gay'

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
                {id: 1, name: 'UserName1'},
                {id: 2, name: 'UserName2'},
                {id: 3, name: 'UserName3'},
                {id: 4, name: 'UserName4'},
                {id: 5, name: 'UserName5'},
                {id: 6, name: 'UserName6'},
            ]
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

    addPost()  {
        let newPost = {
            id:4,
            messag:this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText= '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText)  {
            this._state.profilePage.newPostText = newText;
            this._callSubscriber(this._state);
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
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
        }
    }

}//38 12 40
    
export default store;
window.state = store;