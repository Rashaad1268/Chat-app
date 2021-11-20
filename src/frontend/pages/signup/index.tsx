import React, { FormEvent } from 'react'
import type { NextPage } from 'next'
import HeadTag from '../../pages_/head'
import Ext from '../../pages_/mainComponent'
import ApiURL from '../../pages_/api'

const Login: NextPage = (): React.ReactElement<any, any> => {
    const [showPassword, setShowPassword]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(false);
    const [usernameInput, setUserInput]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");
    const [emailInput, setEmailInput]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");
    const [passwordInput, setPasswordInput]: [string, React.Dispatch<React.SetStateAction<string>>] = React.useState<string>("");
    function loginSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        (async () => {
            let res: Response;
            try {
                res = await fetch(`${ApiURL}/api/auth/signup/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: usernameInput,
                        email: emailInput,
                        password: passwordInput
                    })
                });
            } catch (err) {
                alert("SignUp server is currently offline.")
                console.error(err);
                return;
            }
            let data = await res.json();
            if (res.status == 200) {
                localStorage.setItem("token", data.tokens.refresh);
                sessionStorage.setItem("token", data.tokens.access);
                sessionStorage.setItem("user", data.username);
                sessionStorage.setItem("email", data.email);
                sessionStorage.setItem("id", data.id);
                sessionStorage.setItem("joined", data.date_joined);
                sessionStorage.setItem("profile", data.profile_picture);
                window.location.href = "/";
            } else {
                console.error(data);
                alert(Object.values(data).join("\n"));
            }
        })()
    }
    const [showChecked, setChecked]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(Boolean(false));
    const toggleSP = (): void => setShowPassword(!showPassword);
    const checkSP = (): void => {
        toggleSP();
        setChecked(showChecked ? false : true);
    }
    const [loading, setLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(Boolean(true));
    React.useEffect(() => {
        if (false) {
        } else {
            setLoading(false);
        }
    });
    return (
        <div className='App'>
        <HeadTag />
        {
            function() {
                if (loading) {
                    return <div style={{transform: "translateX(-50%) translateY(-50%)"}}>Loading...</div>
                } else {
                    return (
                        <Ext nav={true} layout={(): React.ReactElement<any, any> => 
                            <div className='login-page'>
                                <form onSubmit={loginSubmit}>
                                    <input required type="text" placeholder="Email" value={emailInput} onChange={(e: React.ChangeEvent<HTMLInputElement>):void => {setEmailInput(e.target.value)}} />
                                    <input required type="text" placeholder="Username" value={usernameInput} onChange={(e: React.ChangeEvent<HTMLInputElement>):void => {setUserInput(e.target.value)}} />
                                    <input required type={showPassword ? "text" : "password"} placeholder="Password" value={passwordInput} onChange={(e: React.ChangeEvent<HTMLInputElement>):void => {setPasswordInput(e.target.value)}}/>
                                    <input checked={showChecked} type="checkbox" onClick={toggleSP} onChange={checkSP} />Show Password
                                    <a href="/">Forgot password</a>
                                    <a href="/">Register</a>
                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        } />
                    )
                }
            }()
        }
        </div>
    )
}

export async function getServerSideProps(context: any) {
    if (context.req.cookies?.token) {
        return {
            redirect: {
                destination: '/@me',
                permanent: false
            }
        }
    } else {
        return {
            props: {}
        }
    }
}

export default Login;