import firebase from 'firebase';
import 'firebase/firestore'
import {USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE} from '../constants/index';

export function fetchUser(){
    return((dispatch)=> {
      
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=>{
            console.log("snapshot exists: " + snapshot)
            if(snapshot.exists){
                console.log("Data" , snapshot.docs);
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
            let posts = snapshot.docs.map(doc=>{
                const data = doc.data();
                const id = doc.id;
                return {id, ...data}
            })
            console.log(posts);
            dispatch({type: USER_POSTS_STATE_CHANGE, posts: posts});
        })
    })
}