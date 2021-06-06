
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserFollowing, getUserPlaylist } from "../redux/actions/action"
import './Profile.css'

export default function Profile() {
    let state = useSelector(state => state)
    // let dispatch = useDispatch()

    console.log(state.userData)
    let  display_name, images, followers //, userId, token,following, playlist
    if (state.userData.data) {
        // token = state.token
        // userId = state.userData.data.id
         display_name  = state.userData.data.display_name
         images  = state.userData.data.images
         followers  = state.userData.data.followers
        console.log(display_name, images[0].url, followers.total)
        // dispatch(getUserFollowing(token))
        // dispatch(getUserPlaylist(token, userId))
        // if (state.following){
        //     console.log( state.following)

        // }
        // if (!state.playlist){
          
        //     console.log( state.playlist )
        // }
    }


    return state.userData.data ? 
        (
        <div className = 'profile' >
            <img src={images[0].url} alt='user' />
             <h1>{display_name} </h1>
            <div className='stats'>
                <div>
                    <p className='green'>{followers.total}</p>
                    <p> FOLLOWERS </p>
                </div>
                {/* <div>
                    <p className='green'>{following}</p>
                    <p> FOLLOWING </p>
                </div>
                <div>
                    <p className='green'>{playlist}</p>
                    <p> PLAYLISTS </p>
                </div> */}
            </div> 
        </div>
    )

:

   
        <h1> loading.... </h1>
    

}