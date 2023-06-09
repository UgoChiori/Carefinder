import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";



export default function ForgotPassword() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { resetPassword } = useAuth();
    const [error, setError] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!emailRef.current) return;
    
        try {
        setMessage("");
        setError("");
        setLoading(true);
        await resetPassword(emailRef.current.value);
        setMessage("Check your inbox for further instructions");
        } catch {
        setError("Failed to reset password");
        }
        setLoading(false);
    }
    
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Password Reset</h2>
    
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
    
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
    
                <Button disabled={loading} className="w-100" type="submit">
                Reset Password
                </Button>
            </Form>
    
            <div className="w-100 text-center mt-3">
                <Link to="/signin">Sign In</Link>
            </div>
            </Card.Body>
        </Card>
    
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
        </div>
        </>
    );
    }