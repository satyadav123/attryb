import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css"
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
    const [first_name, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(first_name,last_name,phone,address,email);
        if (email && first_name && password && email) {

            let arr = JSON.parse(localStorage.getItem("user_data")) || [];
            let user_obj = {
                f_name: first_name,
                password: password,
                email: email,
                
                
            }
            console.log(user_obj)

            localStorage.setItem("user_data", JSON.stringify(user_obj));
            navigate("/login");
        }
        else {
            toast("please enter Valid details")
        }

    }
    return (
        <div>
            <div className="main_div1">
                <div className="box1">
                    <span className="bordreLine1"></span>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>User Registration Form</h2>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={first_name}
                            />

                            <span>Name</span>
                            <i></i>
                        </div>
                        
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox1">
                            <input
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <span>Password</span>
                            <i></i>
                        </div>
                        
                        
                        <input type="submit" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default SignupForm;
;