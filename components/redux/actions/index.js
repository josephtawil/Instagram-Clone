import firebase from 'firebase';
import {USER_STATE_CHANGE} from '../constants/index';

export function fetchUser(){
    return((dispatch)=> {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=>{
            if(snapshot.exists){
                console.log(snapshot.data);
                dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()});
            }
            else{
                console.log("Does not exist");
            }
        })
    })
}

export function fetchUserPosts(){
    return((dispatch)=> {
        firebase.firestore()
        .collection("posts")
        .doc(firebase.auth().currentUser.uid)
        .collection("userPosts")
        .orderBy("creation", "asc")
        .get()
        .then((snapshot)=>{
            console.log(snapshot);
        })
    })
}