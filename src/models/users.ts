import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';


type usersType = {
    users: Object[]
}

const initialState: usersType = {
    users: [{}]
}

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUsers: (state, action: PayloadAction<usersType>) => {
         Object.assign(state, { users: action.payload } );
      }
    }
  })
  
  export const { setUsers } = users.actions
  
  export const selectUsers = (state: RootState) => state.users
  
  export default users.reducer