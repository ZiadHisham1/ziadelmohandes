// components/MainContent.tsx
'use client'
import { useRef } from "react"
import {motion} from "framer-motion"
import { X } from "lucide-react"
import ScrollingTextLines from "./ScrollingTextLines"
import TestimonialCard from "../custom-ui/testimonialCard"
import Testimonials from "./Testimonials"
import IncreasProfits from "./HowToIncreasProfits"
import AboutMe from "./AboutMe"
import ContactMeEnhanced from "./ContactMe"
import Hero from "./Hero"
import Footer from "./Footer"

export default function MainContent() {
    const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Home Section */}
        <section id="home">
          <Hero />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <ScrollingTextLines />
        <section id="skills">
          <IncreasProfits />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="contact">
          <ContactMeEnhanced/>
        </section>
        <Footer />
    </main>
  )
}