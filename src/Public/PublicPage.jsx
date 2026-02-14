import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RealWorldSkills from "../components/RealWorldSkills";
import Form from "../components/Form";

function PublicPage() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <RealWorldSkills />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default PublicPage;
