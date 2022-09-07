import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import logo from '../public/image/logo.png'
import logotext from '../public/image/logotext.png'
import back from '../public/image/back.png'
import Image from 'next/image'
import cat from '../public/image/cat.png'
import eye from '../public/image/eye.png'
import instagram from '../public/image/instagram.png'
import twitter from '../public/image/twitter.png'
import facebook from '../public/image/facebook.png'
import { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import '../firebaseConfig'

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loginOrSignup, setLoginOrSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSignup = async (event) => {
        event.preventDefault()
        if(email == '' ) {
            setFormError(prevState => ({...prevState, email: 'Email is required'}))
        } 
        if (password == '') {
            setFormError(prevState => ({...prevState, password: 'Password is required'}))
        } 
        if(confirmPassword == '') {
            setFormError(prevState => ({...prevState, confirmPassword: 'Confirm Password is required'}))
        } else {
            if(password === confirmPassword) {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert('Registered Successfully')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
            } else {
                setPasswordMatch('password or confirmPassword not match')
                setFormError(prevState => ({...prevState, confirmPassword: 'password or confirmPassword not match'}))
            }
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        if(email == '' ) {
            setFormError(prevState => ({...prevState, email: 'Email is required'}))
        } 
        if (password == '') {
            setFormError(prevState => ({...prevState, password: 'Password is required'}))
        } else {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login Successfully')
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
        }
    }

    useEffect(() => {
        if(email !== '') {
            setFormError(prevState => ({...prevState, email: ''}))
        } 
        if(password !== '') {
            setFormError(prevState => ({...prevState, password: ''}))
        } 
        if(confirmPassword !== '') {
            setFormError(prevState => ({...prevState, confirmPassword: ''}))
        } 
    }, [email, password, confirmPassword])

    return (
        <div>
            <div className='d-flex align-items-center'>
            <Image
                src={logo }
                className={styles.logo}
                alt="Logo"
            />
            <div className='ms-3 d-flex align-items-center'>
                <Image
                src={logotext}
                className={styles.logoText}
                alt="Logo"
                />
            </div>
            </div>
            <div className={styles.loginFormWrapper}>
            <div className={`px-2 position-absolute ${styles.backBtnWrapper}`}>
            <Image
                src={back }
                className={styles.backBtn}
                alt="back"
            />
            </div>
            <div className={`text-center ${styles.formHeader}`}>
                <Image
                src={cat }
                className={styles.cat}
                alt="Logo"
                />
                <div className={`ps-4 ${styles.welcomeText}`}>
                ようこそ!
                </div>
                <div className={`ps-4 ${styles.welcomeTextSub}`}>
                Bem-vindo(a)!
                </div>
            </div>
            <div className={styles.loginForm}>
                <form onSubmit={event => loginOrSignup ? handleLogin(event) : handleSignup(event)}>
                    <div className={`form-group ${styles.formGroup}`}>
                        <label className={styles.label} htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" onInput={(event) => {setEmail(event.target.value)} } className={`form-control ${formError.email !== '' ? 'border-danger' : ''} ${styles.formControl}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        {formError.email && formError.email !== '' ? (<div className='text-end text-danger'>{formError.email}</div>) : ''}
                    </div>
                    <div className={`form-group ${styles.formGroup}`}>
                        <label className={styles.label} htmlFor="exampleInputPassword1">Senha</label>
                        <input type={showPassword ? 'text' : 'password'} onInput={(event) => {setPassword(event.target.value)}} className={`form-control ${formError.password !== '' ? 'border-danger' : ''} ${styles.formControl}`} id="exampleInputPassword1" placeholder="Password" />
                        <div className={styles.showPassword}><Image style={{cursor: 'pointer'}} src={eye} alt="show password" onClick={() => setShowPassword(!showPassword)} /></div>
                        {formError.password && formError.password !== '' ? (<div className='text-end text-danger'>{formError.password}</div>) : ''}
                    </div>
                    { (!loginOrSignup) && (
                        <div className={`form-group ${styles.formGroup}`}>
                            <label className={styles.label} htmlFor="exampleInputPassword2">Confirmar Senha</label>
                            <input type={showConfirmPassword ? 'text' : 'password'}  onInput={(event) => { setConfirmPassword(event.target.value)}} className={`form-control ${formError.confirmPassword !== '' ? 'border-danger' : ''} ${styles.formControl}`} id="exampleInputPassword2" placeholder="Password" />
                            <div className={styles.showPassword}><Image style={{cursor: 'pointer'}} src={eye} alt="show password" onClick={() => setShowConfirmPassword(!showConfirmPassword)} /></div>
                             {formError.confirmPassword && formError.confirmPassword !== '' ? (<div className='text-end text-danger'>{formError.confirmPassword}</div>) : ''}
                        </div>)
                    }
                    <button type="submit" className={ `btn btn-primary btn-lg w-100 mt-3 ${styles.registerBtn}`}>{ loginOrSignup ? 'Login' : 'Registrar' }</button>
                </form>
            </div>
            <div className={`my-5 ${styles.formFooter}`}>
                <div className={`d-flex mb-4  justify-content-between align-items-center`}>
                <div className={`col-3 bg-white`} style={{height:'2px'}}></div>
                <div className={styles.socialLoginText}> { loginOrSignup ? 'Usar Login Social' : 'Ou se registre com' }</div>
                <div className={`col-3 bg-white`} style={{height:'2px'}}></div>
                </div>
                <div className={`d-flex mb-5 justify-content-around w-75 mx-auto`}>
                <Image src={instagram}></Image>
                <Image src={twitter}></Image>
                <Image src={facebook}></Image>
                </div>
                <div className={styles.loginLink}>
                    { loginOrSignup ? 'Não tem conta?' : 'Já é membro?' } <span style={{color:'#E487FB', cursor: 'pointer'}} onClick={() => setLoginOrSignup(!loginOrSignup)}> { loginOrSignup ? 'Registre-se' : 'Faça Login' } </span>
                </div>
            </div>
            </div>
        </div>
    )
}
