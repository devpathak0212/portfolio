"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  FileText,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  const profileRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Profile image animation
    if (profileRef.current) {
      profileRef.current.style.opacity = "0";
      profileRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (profileRef.current) {
          profileRef.current.style.transition =
            "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
          profileRef.current.style.opacity = "1";
          profileRef.current.style.transform = "translateY(0)";
        }
      }, 300);
      // Text animation
      if (textRef.current) {
        textRef.current.style.opacity = "0";
        textRef.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.transition =
              "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
            textRef.current.style.opacity = "1";
            textRef.current.style.transform = "translateY(0)";
          }
        }, 500);
        // Stats animation
        if (statRef.current) {
          const stats = statRef.current.querySelectorAll(".stat-card");
          stats.forEach((stat: Element, index) => {
            const element = stat as HTMLElement;
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            setTimeout(() => {
              element.style.transition =
                "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }, 700 + index * 100);
          });
        }
      }

      // Animate the tags
      const tags = document.querySelectorAll(".animated-tag");
      tags.forEach((tag, index) => {
        const element = tag as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "scale(0.8)";
        setTimeout(() => {
          element.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
          element.style.opacity = "1";
          element.style.transform = "scale(1)";
        }, 1000 + index * 150);
      });
    }
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background - Apple-style gradient with light/dark mode support */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-black"></div>

      {/* Subtle dot pattern - Apple style */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Blue accent glow - Apple style */}
      <div className="absolute top-[30%] left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-[120px] -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-400/10 blur-[140px] -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Profile Image Section */}
          <div
            ref={profileRef}
            className="md:w-1/3 flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Profile image with Apple-style square rounded container */}
              <div className="w-80 h-80 rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-purple-900/30 p-1.5 shadow-xl">
                {/* Replace with actual profile image */}
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dev Pathak"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -inset-3 rounded-3xl border border-blue-200/30 dark:border-blue-500/20 animate-spin-slow"
                style={{ animationDuration: "25s" }}
              ></div>
              <div
                className="absolute -inset-6 rounded-3xl border border-blue-200/20 dark:border-blue-500/10 animate-spin-slow"
                style={{
                  animationDuration: "18s",
                  animationDirection: "reverse",
                }}
              ></div>

              {/* Animated Tags */}
              <div className="animated-tag absolute -right-4 top-12 py-1.5 px-3 bg-blue-500 text-white text-xs font-medium rounded-full shadow-lg">
                Developer
              </div>
              <div className="animated-tag absolute -left-2 bottom-16 py-1.5 px-3 bg-purple-500 text-white text-xs font-medium rounded-full shadow-lg">
                AI Expert
              </div>
              <div className="animated-tag absolute right-12 -bottom-2 py-1.5 px-3 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                Researcher
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={textRef} className="md:w-2/3">
            <h1 className="flex items-center text-5xl md:text-6xl font-semibold tracking-tight mb-6">
              <span className="text-neutral-900 dark:text-white">
                Dev Pathak
              </span>
              <span className="text-blue-500 text-6xl md:text-7xl">.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-normal mb-7 leading-relaxed">
              Developer & Researcher specializing in{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                AI
              </span>
              ,
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {" "}
                machine learning
              </span>
              , and
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {" "}
                full-stack development
              </span>
              .
            </h2>

            {/* Apple-style social buttons */}
            <div className="flex space-x-5 mb-7">
              <a
                href="https://github.com/devpathak0212"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-pathak0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:devbrijenpathak@gmail.com"
                className="p-3 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-white dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
                aria-label="Resume"
              >
                <FileText size={20} />
              </a>
            </div>

            <div
              className={cn(
                "flex flex-wrap gap-3",
                isVisible ? "animate-in stagger-2" : "opacity-0"
              )}
            >
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-full shadow-md"
              >
                <Link href="mailto:devbrijenpathak@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Get in touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="#projects">
                  <ExternalLink className="mr-2 h-4 w-4" /> View my work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
