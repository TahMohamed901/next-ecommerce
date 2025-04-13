"use client"
import { useEffect } from "react";
import { useAuthStore } from "@/hooks/useAuthStore";
import {login} from "@/lib/services/authServices"
const Page = () => {
  const { user, isAuthenticated, isLoading, fetchUser, logout } = useAuthStore();
  
  useEffect(() => {
    console.log("👤 User:", user);
    console.log("🔐 Authenticated:", isAuthenticated);
    console.log("⏳ Loading:", isLoading);
  }, [user, isAuthenticated, isLoading]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🧪 Test Auth Store Zustand</h1>

      <p><strong>Loading:</strong> {isLoading ? "Yes" : "No"}</p>
      <p><strong>Authenticated:</strong> {isAuthenticated ? "Yes" : "No"}</p>
      <p><strong>User:</strong> {user ? JSON.stringify(user) : "Aucun utilisateur"}</p>

      <button onClick={fetchUser} style={{ marginRight: "1rem" }}>
        🔄 Fetch User
      </button>
      <button onClick={logout} style={{ marginRight: "1rem" }}>
        🚪 Logout
      </button>
      <button onClick={()=> login({email:"md@gmail.com",password:"12345678"})} >
        🔄 Login
      </button>
    </div>
  );
};

export default Page;
