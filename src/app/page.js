import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { cookies } from 'next/headers';
require('dotenv').config();

async function getIp() {
  const cookieStore = cookies();
  const ip = cookieStore.get('ip')?.value || 'IP no encontrada';
  return ip;
}

export default async function Home() {
  const ip = await getIp();
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <h1 className="hidden">Tu dirección IP es: {ip}</h1>
    </main>
  );
}
