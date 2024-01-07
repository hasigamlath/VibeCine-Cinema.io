import React from "react"
export default function Register() {
return (
    <>
    
    <div class="wrapper">
        <a href="log.html">
            <span class="icon-close"><ion-icon name="close-outline"></ion-icon></span>
        </a>
        <div class="form-box login">
            <h2>Login</h2>
            <form id="login">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required id="username" name="username"/>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required id="password" name="password"/>
                    <label>Password</label>
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox"/>Remember Me</label>
                    <a href="#"><b>Forget Password ?</b></a>
                </div>
                <button type="submit" class="btn-login">Login</button>
                <div class="login-register">
                    <p>Don't have an account ?<a href="#" class="register-link"> Sign In Here</a></p>
                </div>
            </form>
        </div>

        <div class="form-box register">
            <h2>Sign In</h2>
            <form action="#" id="signup">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                    <input type="text" required id="username" name="username"/>
                    <label>First Name</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                    <input type="email" required id="email" name="email"/>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                    <input type="password" required id="password" name="password"/>
                    <label>Password</label>
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox"/>I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn-login">Sign In</button>
                <div class="login-register">
                    <p>Already have an account ?<a href="#" class="login-link"> Login Here</a></p>
                </div>
            </form>
        </div>
    </div>

</>
)
}