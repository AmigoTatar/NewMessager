const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE ='SEND_MESSAGE';

const MessangerPrfReducer = (state, action) => {
   /* if(action.type === 'UPDATE_NEW_MESSAGE_BODY'){
        state.newMessageBody = action.body;
    }
    else if(action.type === 'SEND_MESSAGE'){
        let body =  state.newMessageBody;
        state.newMessageBody = '';
       state.messageData.push({id:7, messag: body});
    }
    return state;*/
    switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
    return state;
    case SEND_MESSAGE:
        let body =  state.newMessageBody;
        state.newMessageBody = '';
        state.messageData.push({id:7, messag: body}); 
        return state; 
      default:
          return state;     
    }
};
export default MessangerPrfReducer;

export const  sendMessageCreator = ()=> ({ type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body)=> ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});