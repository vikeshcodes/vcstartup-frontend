import { BASE_URL } from "./config.js";

const token = localStorage.getItem("token");
if (!token) window.location.replace("login.html");

// Load profile
window.onload = async () => {
  try {
    const res = await fetch(`${BASE_URL}/profile/me`, {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();

    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("dob").value = data.dob || "";
    document.getElementById("phone").value = data.phone || "";
    document.getElementById("address").value = data.address || "";
    if (data.profilePic) document.getElementById("imgPreview").src = data.profilePic;
  } catch {
    localStorage.clear();
    window.location.replace("login.html");
  }
};

// Save profile
export async function saveProfile() {
  const body = {
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    profilePic: document.getElementById("imgPreview").src,
  };

  const res = await fetch(`${BASE_URL}/profile/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });

  alert("Profile Updated");
}

export function logout() {
  localStorage.clear();
  window.location.replace("login.html");
}
