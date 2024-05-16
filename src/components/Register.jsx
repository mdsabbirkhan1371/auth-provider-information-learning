

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    
    const {createUser} = useContext(AuthContext)
    

    // handle register 

    const handleRegister=(e)=>{

        e.preventDefault()
        const name =e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,password,email)

        // create user with email and password
       createUser(email,password)
       .then(result=>{
        const user =result.user;
        console.log(user)
        e.target.reset()
       })

        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center ">
            <h1 className="text-5xl font-bold">Register  now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <span  className="label-text-alt link link-hover">Already Have An Account?</span>
                        <span className="label-text-alt link link-hover text-orange-600"><Link to='/login'>Login Now</Link></span>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
</div>
    );
};

export default Register;