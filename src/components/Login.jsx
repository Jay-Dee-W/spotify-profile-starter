
import './Login.css';
import { loginUrl } from "./Spotify";

export default function Login() {
    return (
        <div className='login'>
             <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}