import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;