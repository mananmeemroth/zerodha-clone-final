import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
	const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", accept: false });
	const [errors, setErrors] = useState({});

	function onChange(e) {
		const { name, value, type, checked } = e.target;
		setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
	}

	function validate() {
		const errs = {};
		if (!form.name.trim()) errs.name = "Name is required";
		if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) errs.email = "Enter a valid email";
		if (form.password.length < 6) errs.password = "Password must be >= 6 chars";
		if (form.password !== form.confirm) errs.confirm = "Passwords do not match";
		if (!form.accept) errs.accept = "You must accept terms";
		setErrors(errs);
		return Object.keys(errs).length === 0;
	}

	function onSubmit(e) {
		e.preventDefault();
		if (!validate()) return;
		// TODO: replace with real signup call
		console.log("Signup data:", { ...form, password: "***" });
		alert("Signup successful (demo)");
		setForm({ name: "", email: "", password: "", confirm: "", accept: false });
	}

	return (
		<main className="signup-page">
			<section className="signup-card">
				<h1>Create account</h1>
				<form onSubmit={onSubmit} noValidate>
					<label>
						Full name
						<input name="name" value={form.name} onChange={onChange} />
						{errors.name && <small className="err">{errors.name}</small>}
					</label>

					<label>
						Email
						<input name="email" type="email" value={form.email} onChange={onChange} />
						{errors.email && <small className="err">{errors.email}</small>}
					</label>

					<label>
						Password
						<input name="password" type="password" value={form.password} onChange={onChange} />
						{errors.password && <small className="err">{errors.password}</small>}
					</label>

					<label>
						Confirm password
						<input name="confirm" type="password" value={form.confirm} onChange={onChange} />
						{errors.confirm && <small className="err">{errors.confirm}</small>}
					</label>

					<label className="checkbox">
						<input name="accept" type="checkbox" checked={form.accept} onChange={onChange} /> I agree to the terms
						{errors.accept && <small className="err">{errors.accept}</small>}
					</label>

					<button type="submit" className="btn">Create Account</button>
				</form>
			</section>
		</main>
	);
}
