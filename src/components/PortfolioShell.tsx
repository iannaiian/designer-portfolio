"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import SectionTracker from "./SectionTracker";
import AboutSection from "./sections/AboutSection";
import ExperiencesSection from "./sections/ExperiencesSection";
import HeroSection from "./sections/HeroSection";
import PastWorksSection from "./sections/PastWorksSection";
import { useHorizontalWheelScroll } from "@/hooks/useHorizontalWheelScroll";
import { sections, type SectionId } from "@/lib/sections";

export default function PortfolioShell() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef<SectionId>("hero");
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  const scrollToSection = useCallback((sectionId: SectionId) => {
    const container = scrollRef.current;
    const target = document.getElementById(sectionId);
    if (!container || !target) return;

    container.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const stepSection = useCallback(
    (direction: 1 | -1) => {
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSectionRef.current,
      );
      const nextIndex = currentIndex + direction;

      if (nextIndex < 0 || nextIndex >= sections.length) return;

      scrollToSection(sections[nextIndex].id);
    },
    [scrollToSection],
  );

  useHorizontalWheelScroll({
    onStep: stepSection,
    getActiveSectionId: () => activeSectionRef.current,
  });

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const viewportWidth = container.clientWidth;
      const index = Math.round(scrollLeft / viewportWidth);
      const next = sections[index]?.id ?? "hero";
      setActiveSection(next);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = sections.findIndex(
        (section) => section.id === activeSectionRef.current,
      );
      if (event.key === "ArrowRight" && currentIndex < sections.length - 1) {
        scrollToSection(sections[currentIndex + 1].id);
      }
      if (event.key === "ArrowLeft" && currentIndex > 0) {
        scrollToSection(sections[currentIndex - 1].id);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollToSection]);

  return (
    <>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <SectionTracker
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main ref={scrollRef} className="snap-scroll h-screen w-screen">
        <HeroSection />
        <AboutSection />
        <ExperiencesSection />
        <PastWorksSection />
      </main>
    </>
  );
}
