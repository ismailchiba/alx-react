import React from "react";
import "./Login.css";

export function Login() {
    return (
        <main className="App-login">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">OK</button>
        </main>
    );
    };