import { BASE_URL } from "./config.js";

let otpVerified = false;

// Switch Login / Signup tabs
export function switchAuthTab(tab) {
  document.querySelectorAll(".auth-content").forEach(d => d.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.querySelectorAll(".auth-tab").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// LOGIN
export async function submitLogin() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!email || !password) return alert("Required!");

  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.name);

    window.location.href = "profile.html";
  } catch {
    alert("Server error");
  }
}

// SEND OTP
export async function sendOtp() {
  const email = document.getElementById("signup-email").value;
  if (!email) return alert("Enter email!");

  const res = await fetch(`${BASE_URL}/otp/signup-send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  if (!res.ok) return alert(data.error || data.message);

  document.getElementById("otpBox").style.display = "block";
  alert("OTP sent!");
}

// Verify OTP
export async function verifyOtp() {
  const email = document.getElementById("signup-email").value;
  const otp = document.getElementById("otp").value;

  const res = await fetch(`${BASE_URL}/otp/signup-verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  const data = await res.json();
  if (!res.ok) return alert(data.error);

  otpVerified = true;
  document.getElementById("passBox").style.display = "block";
  document.getElementById("signupBtn").style.display = "block";
}

// SIGNUP
export async function submitSignup() {
  if (!otpVerified) return alert("Verify OTP first!");

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirm = document.getElementById("signup-confirm").value;

  if (password !== confirm) return alert("Passwords mismatch");

  const res = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  alert(data.message);
  if (res.ok) window.location.href = "login.html";
}
