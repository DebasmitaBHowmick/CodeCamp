import { toast } from "react-toastify";

// Get backend base URL safely
const BASE_URL = process.env.REACT_APP_HOST.replace(/\/$/, "");

// ---------- Register ----------
export async function register(authDetail) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    });

    // Always attempt to parse JSON
    const data = await response.json();

    if (response.ok && data.accessToken) {
      // Store token and user ID
      sessionStorage.setItem("ccid", JSON.stringify(data.user.id));
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      toast.success("Registered successfully!");
    } else {
      // If backend returns an error message
      const message = data.message || JSON.stringify(data);
      toast.error(message, { type: "error" });
    }

    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error("Something went wrong. Please try again.");
    return { error: true, message: "Network or server error" };
  }
}

// ---------- Login ----------
export async function login(authDetail) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    });

    const data = await response.json();

    if (response.ok && data.accessToken) {
      sessionStorage.setItem("ccid", JSON.stringify(data.user.id));
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      toast.success("Logged in successfully!");
    } else {
      const message = data.message || JSON.stringify(data);
      toast.error(message, { type: "error" });
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Something went wrong. Please try again.");
    return { error: true, message: "Network or server error" };
  }
}

// ---------- Logout ----------
export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("ccid"); // fixed typo from "cbid" → "ccid"
  toast.info("Logged out successfully");
}

