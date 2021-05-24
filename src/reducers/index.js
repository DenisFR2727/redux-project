import { combineReducers } from 'redux';
import listUser from './listUser';
import organizer from './organizer';






export default combineReducers({
       users: listUser,
       daysCheked: organizer
})