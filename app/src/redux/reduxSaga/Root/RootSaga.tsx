import {all, call, put, takeLatest} from 'redux-saga/effects'
import {rootActions} from './RootRedux'
import ApiUtil from '../../../ultils/ApiUltils'

export function* watchRootSaga() {
  yield all([takeLatest(rootActions.getUsers.type, handleGetUsers)])
}

function* handleGetUsers(): any {
  try {
    yield put(rootActions.displayLoading())
    const api = () => ApiUtil.fetch('api/users/random_user?size=10', {method: 'GET'})
    const response = yield call(api)
    yield put(rootActions.hideLoading())
    if (response?.status === 200 && response?.data) {
      yield put(rootActions.getUsersSuccess(response?.data))
      console.log('Success')
    } else {
      console.log('failed')
    }
  } catch (error) {
    console.log('err', error)
    yield put(rootActions.hideLoading())
  }
}
