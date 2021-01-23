import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer, productReviewCreateReducer}  from './reducers/productReducers'
import {userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer} from './reducers/userReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productReviewCreate: productReviewCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const middleware = [thunk]

const initialState={}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store