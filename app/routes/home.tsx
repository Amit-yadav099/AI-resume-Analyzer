import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import  {resumes}  from "constants/index";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your job!" },
  ];
}

export default function Home() {


    const {auth}=usePuterStore();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    },[auth.isAuthenticated])




  return ( <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar></Navbar>
     

      <section className="main-section">
        <div className="page-heading py-10">
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your submission and check AI-powered feedback.</h2>
        </div>
       {resumes.length > 0 && (
         <div className="resumes-section">
       {resumes.map((resume) => (
         <ResumeCard key={resume.id} resume={resume}/>
        ))}
      </div> 
       )}
       </section>
     </main>
  )
}
