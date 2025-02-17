"use client"

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 py-6 bg-white">
      <div className="max-w-7xl mx-auto rounded-custom bg-[#c4deff] px-8 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
          {/* Left side - Logos */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/images/ministry-logo.png"
                alt="Ministry of Education"
                width={150}
                height={80}
                className="object-contain"
              />
              <Image
                src="/images/iks-logo-removebg-preview.png"
                alt="Gyan Gunjan"
                width={150}
                height={80}
                className="object-contain -ml-8"
              />
            </div>
            <div className="flex items-center justify-center -mt-16">
              <Image
                src="/images/flame-university.png"
                alt="Flame University"
                width={190}
                height={80}
                className="object-contain"
              />
              <Image
                src="/images/cka.png"
                alt="CKA Logo"
                width={150}
                height={40}
                className="object-contain -ml-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {/* First Column */}
            <div className="flex flex-col gap-3 items-center">
              <Link href="/about-project" className="text-[#1a365d] hover:text-gray-900">
                About the Project
              </Link>
              <Link href="/jeevan-darshan" className="text-[#1a365d] hover:text-gray-900">
                Jeevan Darshan
              </Link>
              <Link href="/resources" className="text-[#1a365d] hover:text-gray-900">
                Resources
              </Link>
              <Link href="/lets-collaborate" className="text-[#1a365d] hover:text-gray-900">
                Lets Collaborate
              </Link>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-3 items-center">
              <Link href="/contact" className="text-[#1a365d] hover:text-gray-900">
                Contact Us
              </Link>
              <Link href="https://iksindia.org/about.php" className="text-[#1a365d] hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                About IKS Division
              </Link>
              <Link href="https://www.flame.edu.in/cka/about-the-centre.php" className="text-[#1a365d] hover:text-gray-900" target="_blank" rel="noopener noreferrer">
                About CKA
              </Link>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-3 items-center">
              <Link href="#" className="text-[#1a365d] hover:text-gray-900">
                Terms of Use
              </Link>
              <Link href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:text-gray-900">
                Creative Commons 4.0
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };