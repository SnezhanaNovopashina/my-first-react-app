const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                text: state.newMessageText,
                author: 'me'
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;   
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;