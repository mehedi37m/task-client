
import { FaGoogle } from 'react-icons/fa';


import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosLocal from '../../hooks/useAxiosLocal';

const SocialLogin = () => {
    const {signInWithGoogle} = useAuth();
    const axiosLocal = useAxiosLocal();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL,
                role: 'user',
                phoneNumber:result.user?.phoneNumber
            }
            axiosLocal.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className='text-center pb-4'>
                <button onClick={handleGoogleSignIn} className='btn btn-primary '>
                    <FaGoogle></FaGoogle> google
                </button>
            </div>
            
        </div>
    );
};

export default SocialLogin;