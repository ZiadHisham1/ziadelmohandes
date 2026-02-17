"use client"
import MainContent from "@/components/sections/MainContent";
import EnhancedResponsiveSidebar from "@/components/sections/sidebar";
import {motion} from "framer-motion"


export default function Home() {
  return (
    <main className="flex ">
      <EnhancedResponsiveSidebar />
      <MainContent />
    </main>
  );
}
