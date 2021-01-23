import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer, productReviewCreateReducer}  from './reducers/productReducers'
import {userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer} from './reducers/userReducers'
import {cartReducer} from './reducers/cartReducers'
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productReviewCreate: productReviewCreateReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')?
 JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')? 
JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?
 JSON.parse(localStorage.getItem('shippingAddress')):{}


const middleware = [thunk]

const initialState={
    cart :{
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage,
    },
    userLogin:{userInfo:userInfoFromStorage}
}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store