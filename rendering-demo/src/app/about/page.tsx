import { useState } from "react";

export default function AboutPage() {
    const [name, setName] = useState("");
  console.log("About server component")
  return <h1>About page{new Date().toLocaleTimeString()}</h1>;
  
}