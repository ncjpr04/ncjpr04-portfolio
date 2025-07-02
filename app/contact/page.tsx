"use client";
import { useEffect, useState } from "react";
import type { ProfileType } from "@/types";
import ContactForm from "../components/shared/ContactForm";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import { HiOutlineMail, HiOutlineMap, HiOutlineClock } from "react-icons/hi";

export default function Contact() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
        <div className="animate-pulse">
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 w-3/4"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-2/3"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      {/* Header Section */}
      <section className="mb-16">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-2xl">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and development. Feel free to reach out!
          </p>
        </Slide>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:mt-8">
        {/* Contact Information */}
        <Slide delay={0.1}>
          <div className="space-y-8">
            <div>
              <h2 className="font-incognito font-semibold text-2xl mb-6">
                Get in Touch
              </h2>
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I&apos;d love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-color/10 dark:bg-primary-color/20 rounded-lg flex items-center justify-center">
                  <HiOutlineMail className="w-5 h-5 text-primary-color" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${profile?.email || 'contact@example.com'}`}
                    className="text-primary-color hover:text-secondary-color transition-colors"
                  >
                    {profile?.email || 'contact@example.com'}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-color/10 dark:bg-primary-color/20 rounded-lg flex items-center justify-center">
                  <HiOutlineMap className="w-5 h-5 text-primary-color" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="dark:text-zinc-400 text-zinc-600">
                    {profile?.location || "Available for remote work"}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-color/10 dark:bg-primary-color/20 rounded-lg flex items-center justify-center">
                  <HiOutlineClock className="w-5 h-5 text-primary-color" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Response Time</h3>
                  <p className="dark:text-zinc-400 text-zinc-600">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t dark:border-zinc-800 border-zinc-200">
              <h3 className="font-medium text-lg mb-4">Follow Me</h3>
              <Social type="social" />
            </div>
          </div>
        </Slide>

        {/* Contact Form */}
        <Slide delay={0.2}>
          <div className="bg-white dark:bg-zinc-900/50 border dark:border-zinc-800 border-zinc-200 rounded-2xl p-8 shadow-sm lg:-mt-14">
            <div className="mb-6">
              <h2 className="font-incognito font-semibold text-2xl mb-2">
                Send a Message
              </h2>
              <p className="text-sm dark:text-zinc-400 text-zinc-600">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </Slide>
      </div>

      {/* Additional Info Section */}
      <section className="mt-20 pt-16 border-t dark:border-zinc-800 border-zinc-200">
        <Slide delay={0.3}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-incognito font-semibold text-2xl mb-4">
              What I&apos;m Looking For
            </h2>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I&apos;m particularly interested in full-stack development opportunities, open source collaborations, 
              and innovative projects that challenge me to grow. Whether it&apos;s a startup, established company, 
              or a passion project, I&apos;m excited to explore how we can work together.
            </p>
          </div>
        </Slide>
      </section>
    </main>
  );
} 