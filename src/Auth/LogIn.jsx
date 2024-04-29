import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";
import 'animate.css';

const LogIn = () => {
    const { signIn, googleLogIn, githubLogIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setError('')
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError('invalid-credential')
                console.error(error)
            })
    }
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithub = () => {
        githubLogIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            {/* <Helmet>
                <title> | LogIn</title>
            </Helmet> */}
            <div className="hero container mx-auto">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold animate__animated animate__backInDown">Login now!</h1>
                    </div>
                    <div className="card border shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__backInUp">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <samp className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </samp>
                                </div>
                            </div>
                            {
                                error && <small className="text-red-800">{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn font-bold bg-[#1DD100]">Login</button>
                            </div>
                        </form>
                        <div className="text-center p-3">
                            <p className="font-bold">Don’t have an account? <Link to='/register'><u className="font-bold text-[#1DD100]">Create an account</u></Link></p>
                        </div>
                    </div>
                    <div className=" space-y-2">
                        <div className="divider">Or</div>
                        <button onClick={handleGoogle} className="border border-blue-800 btn w-full text-blue-600 font-bold animate__animated animate__backInLeft"><FaGoogle />Continue with Google</button>
                        <button onClick={handleGithub} className="border border-black btn w-full font-bold animate__animated animate__backInRight"><FaGithub />Continue with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;