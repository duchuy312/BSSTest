import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

const initialState = {
  userList: [],
  isLoading: false
}

const rootRedux = createSlice({
  name: 'rootRedux',
  initialState,
  reducers: {
    displayLoading: state => {
      return {
        ...state,
        isLoading: true
      }
    },
    hideLoading: state => {
      return {
        ...state,
        isLoading: false
      }
    },
    getUsers: state => {},
    getUsersSuccess: (state, action) => {
      return {
        ...state,
        userList: action.payload
      }
    },
  }
})

export const selectRoot = (state: RootState) => state.root;

export const rootActions = rootRedux.actions

export default rootRedux.reducer
