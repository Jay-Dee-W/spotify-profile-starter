
import './Login.css';
import { loginUrl } from "./Spotify";

export default function Login() {
    return (
        <div className='login'>
            <h1> Spotify Profile</h1>
             <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}