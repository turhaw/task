import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { lightTheme } from '../themes';


type themeType = {
  backgroundColor: string,
  textColor: string,
  primary: string,
  navbar: string,
  detailsBorder: string
}

interface themeState {
  theme: themeType
}

const initialState: themeState = {
  theme: lightTheme
}


export const themeToggle = createSlice({
  name: 'themeToggle',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<themeType>) => {
      console.log(action.payload,"changeTheme PayloadAction")
       Object.assign(state, { theme: action.payload } );
    },
  }
})

export const { changeTheme } = themeToggle.actions

export default themeToggle.reducer