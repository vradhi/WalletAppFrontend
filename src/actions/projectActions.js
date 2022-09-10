import axios from 'axios'
import { GET_ERRORS } from './types';

export const createWallet = (newWallet) => async dispatch => {
   await axios.post('http://localhost:8081/wallet', newWallet).then((res) => {
        //history.push('/dashboard')
        alert("this record is submitted successfully!");
   }).catch((err) => {
        //alert("Error. Check the validations and fill in the values accordingly.");
        dispatch({type:GET_ERRORS,payload:err.response.data})
   })
}

