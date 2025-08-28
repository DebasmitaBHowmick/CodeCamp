import { toast } from "react-toastify";

export async function register(authDetail) {
    const RequestOpt= {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
      };
    try {
     const response = await fetch(`${process.env.REACT_APP_HOST}/register`,RequestOpt)
    const data = await response.json();
        console.log("Response from backend:", data);

        if(data.accessToken){
            sessionStorage.setItem("ccid", JSON.stringify(data.user.id))
            sessionStorage.setItem("token", JSON.stringify(data.accessToken)) } else{
            toast.error(data, { type: "error" });
        };
      return data;    
  } catch (error) {
    console.error("Error during registration:", error);
    toast("Something went wrong. Please try again.", { type: "error" });
    return null;  // return something in case of error
  }
};

export async function login (authDetail){
const RequestLogin= {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),};
      try {
         const response = await fetch(`${process.env.REACT_APP_HOST}/login`,RequestLogin)
           const data = await response.json();
            //console.log("Response from backend:", data);
    
          if(data.accessToken){
                sessionStorage.setItem("ccid", JSON.stringify(data.user.id))
                sessionStorage.setItem("token", JSON.stringify(data.accessToken))
                toast.success("Logged in successfully");
            }
            else{
                toast.error(data, { type: "error" });
            }

            return data;
      } catch (error) {
        console.error("Error during registration:", error);
        toast("Something went wrong. Please try again.", { type: "error" });

        return null;
      }
};

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}