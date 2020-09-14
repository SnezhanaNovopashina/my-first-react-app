const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, messageText: 'Hello!', likesCount: 2 },
                { id: 2, messageText: 'How are U?', likesCount: 4 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sharik', avatar: 'https://dog.pet2me.com/upload/breed_photo/full/2015/01_8faa.jpg' },
                { id: 2, name: 'Bobik', avatar: 'https://vetstreet-brightspot.s3.amazonaws.com/42/c5/d38729f543e4a3c592e90e8fbb48/pug-ap-kwdhxs-335.jpg' },
                { id: 3, name: 'Murka', avatar: 'https://www.cwvet.co.uk/wp-content/uploads/2020/04/cat-health-plan-vets.jpg' },
                { id: 4, name: 'Pushok', avatar: 'https://3.bp.blogspot.com/-meQobkTlmHY/Wk9Y0is4ZAI/AAAAAAAAHZg/p84Ej1C3AesmeVY4KYjUyLhgLA9QfuhvACEwYBhgL/s1600/british-shorthair-cat.jpg' },
                { id: 5, name: 'Barsik', avatar: 'https://www.washingtonian.com/wp-content/uploads/2019/02/milada-vigerova-1295750-unsplash-2048x3072.jpg' },
                { id: 6, name: 'Persik', avatar: 'https://i.pinimg.com/originals/32/95/5c/32955c2340997a56c0cfc79a028da684.jpg' }
            ],
            messages: [
                { id: 1, text: 'Yo!', author: 'other' },
                { id: 2, text: 'Whazzup, man', author: 'other' },
                { id: 3, text: 'R u ok?', author: 'other' },
                { id: 4, text: 'Hey, bro!', author: 'me' },
                { id: 5, text: 'i\'m fine', author: 'me' },
                { id: 6, text: 'So, what about weekend?', author: 'other' },
                { id: 7, text: 'I\'m in!', author: 'me' }
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Sharik', avatar: 'https://dog.pet2me.com/upload/breed_photo/full/2015/01_8faa.jpg' },
                { id: 2, name: 'Pushok', avatar: 'https://3.bp.blogspot.com/-meQobkTlmHY/Wk9Y0is4ZAI/AAAAAAAAHZg/p84Ej1C3AesmeVY4KYjUyLhgLA9QfuhvACEwYBhgL/s1600/british-shorthair-cat.jpg' },
                { id: 3, name: 'Murka', avatar: 'https://www.cwvet.co.uk/wp-content/uploads/2020/04/cat-health-plan-vets.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                messageText: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 8,
                text: this._state.dialogsPage.newMessageText,
                author: 'me'
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default store;
window.store = store;