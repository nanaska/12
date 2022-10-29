import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

import {authentication} from "../config/firebase";
import {  RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";

const SignUp = () => {


    const [phone, setPhone] = useState("")
    const [code, SetCode] = useState("")
    const [expandForm, SetExpandForm] = useState(false)
    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
        }, authentication);
    }
    const handleSignup = async (e) => {
        e.preventDefault()

        if (phone.length >= 12) {
            SetExpandForm(true)
            generateRecaptcha()
            let appVerifier = window.recaptchaVerifier
            signInWithPhoneNumber(authentication, phone, appVerifier)
                .then((confirmationResult)=>{
                    window.confirmationResult = confirmationResult
                }).catch(e => console.log(e))
        }
    }
    const handleSignupForCode = async (e) => {
        e.preventDefault()
        if(code.length === 6){
            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                SetExpandForm(false)
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error)
            });
        }

    }

    return (
        <div
            style={{
                width: '40%',
                margin: 'auto',
            }}
        >
            <h1 className="text-center my-3 ">Signup</h1>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter phoneNumber"
                        required
                        onChange={(e) =>
                            setPhone(e.target.value)}
                        value={phone}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
            {expandForm && <Form onSubmit={handleSignupForCode}>
                <Form.Group className="mb-3" controlId="formForCode">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter code"
                        required
                        onChange={(e) =>
                            SetCode(
                                e.target.value,
                            )
                        }
                        value={code}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Code
                </Button>
            </Form>}
            <div id="recaptcha-container"></div>
        </div>
    )
}


export default SignUp