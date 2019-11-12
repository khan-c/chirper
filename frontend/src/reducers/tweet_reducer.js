import { RECEIVE_TWEETS } from '../actions/tweet_actions';

const initialState = {
  
};

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_TWEETS:
      return {
        
      };
    default:
      return state;
  }
}
