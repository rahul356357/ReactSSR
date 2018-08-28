import {FETCH_ADMINS} from '../actions';


export default (state={} , actions)=>{
   const {type , payload} = actions;
  switch(type){
      case FETCH_ADMINS:{
          return payload.data
      }
      default :
      return state
  }
}

