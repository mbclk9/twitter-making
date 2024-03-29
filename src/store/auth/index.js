import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    currentAccount : {
        id :1,
        username:'mbclk9',
        fullname:'Muhammet Çelik',
        avatar:'https://pbs.twimg.com/profile_images/1771889003421212672/o1xhnMOv_400x400.jpg'

    },
    accounts:[
        {
            id :1,
            username:'mbclk9',
            fullname:'Muhammet Çelik',
            avatar:'https://pbs.twimg.com/profile_images/1771889003421212672/o1xhnMOv_400x400.jpg'
        },
        {
            id:2,
            username:'mesutcelik_us',
            fullname:'Mesut Çelik',
            avatar:'https://pbs.twimg.com/profile_images/1746782940422713344/X8A_kHHR_400x400.jpg'
        }
    ]

}

const auth =createSlice({
    name:'auth',
    initialState,
    reducers:{
        //state manipule etme metodları
        _addAccount :(state,action) =>{
            state.accounts.push(action.payload);
        },
        _removeAccount:(state,action) =>{
            state.accounts= state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state,action) =>{
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer