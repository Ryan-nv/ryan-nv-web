'use client';
import Image from "next/image";
import Particles from "@/Backgrounds/Particles/Particles";
import { ChevronDownIcon, EnvelopeIcon as OutlineEnvelopeIcon, CubeIcon as OutlineCubeIcon, MapPinIcon, GlobeAltIcon, ClockIcon, UserPlusIcon, BuildingOffice2Icon, CalendarIcon, CheckCircleIcon, HomeModernIcon, CubeTransparentIcon, Squares2X2Icon, BanknotesIcon, GlobeAsiaAustraliaIcon, CogIcon, XCircleIcon} from "@heroicons/react/24/outline";
import { EnvelopeIcon, CheckCircleIcon as CheckCircleIconSolid, CubeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import CardSwap, { Card } from "@/components/CardSwap/CardSwap";
import { Button } from "@heroui/button";
import { useState } from "react";

type TechStack = {
  url: string,
  name: string
}
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const techStackFrontend: TechStack[] = [
    {
      name: 'Next.js',
      url: '/assets/logos/nextjs.svg'
    },
    {
      name: 'Tailwind',
      url: '/assets/logos/tailwind.svg'
    },
    {
      name: 'Bootstrap',
      url: '/assets/logos/bootstrap.svg'
    },
    {
      name: 'Typescript',
      url: '/assets/logos/typescript.png'
    },
    {
      name: 'Javascript',
      url: '/assets/logos/javascript.png'
    },
  ]
  const techStackBackend: TechStack[] = [
    {
      name: 'Node.js',
      url: '/assets/logos/nodejs.svg'
    },
    {
      name: 'Express.js',
      url: '/assets/logos/expressjs.svg'
    },
    {
      name: 'Laravel',
      url: '/assets/logos/laravel.png'
    },
    {
      name: '.NET',
      url: '/assets/logos/dotnet.png'
    },
    {
      name: 'Javascript',
      url: '/assets/logos/javascript.png'
    },
    {
      name: 'Typescript',
      url: '/assets/logos/typescript.png'
    },
    {
      name: 'PHP',
      url: '/assets/logos/php.svg'
    },
    {
      name: 'C#',
      url: '/assets/logos/csharp.svg'
    },
  ]
  const techStackDb: TechStack[] = [
    {
      name: 'PostgreSQL',
      url: '/assets/logos/postgresql.svg'
    },
    {
      name: 'MySQL',
      url: '/assets/logos/mysql.svg'
    },
    {
      name: 'MongoDB',
      url: '/assets/logos/mongodb.svg'
    },
    {
      name: 'Redis',
      url: '/assets/logos/redis.svg'
    },
  ]
  const techStackCloud: TechStack[] = [
    {
      name: 'Git',
      url: '/assets/logos/git.svg'
    },
    {
      name: 'Firebase',
      url: '/assets/logos/firebase.svg'
    },
    {
      name: 'Docker',
      url: '/assets/logos/docker.svg'
    },
  ]
  return (
    <div className="w-full flex flex-col transition-colors duration-300">
      <div className="w-full fixed hidden sm:flex align-middle justify-center p-3 bg-transparent z-10 ">
        <div className="border dark:border-gray-900 flex w-fit px-6 py-4 rounded-full gap-4 sm:gap-8 items-center bg-background text-xs sm:text-base">
          <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <Link className="" href={'#about'}>About</Link>
          </div>
          <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <Link className="" href={'#tech-stack'}>Tech-stack</Link>
          </div>
          <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <Link className="" href={'#experience'}>Experience</Link>
          </div>
          <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <Link className="" href={'#projects'}>Projects</Link>
          </div>
          <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <Link className="" href={'#contact'}>Contact</Link>
          </div>
          {/* <div className="font-semibold font-nunito border border-slate-800 p-2 rounded-full sm:p-0 sm:border-0">
            <ThemeSwitcher/>
          </div> */}
        </div>
      </div>
      <div className="w-full fixed flex flex-col sm:hidden align-middle justify-center bg-background px-8 pt-6 pb-4 z-10 h-fit border-b border-slate-800">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-bold font-raleway p-0 logo tracking-widest">RYAN-NV</h3>
          <Button isIconOnly variant="light" color="danger" onPress={() => { setIsMenuOpen(!isMenuOpen) }}>
            <Squares2X2Icon className="size-6" />
          </Button>
        </div>
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col py-8 gap-3 items-center bg-background text-sm`}>
          <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Link className="" href={'#about'}>About</Link>
          </div>
          <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Link className="" href={'#tech-stack'}>Tech-stack</Link>
          </div>
          <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Link className="" href={'#experience'}>Experience</Link>
          </div>
          <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Link className="" href={'#projects'}>Projects</Link>
          </div>
          <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Link className="" href={'#contact'}>Contact</Link>
          </div>
          {/* <div className="w-full font-semibold font-nunito border border-slate-800 px-5 py-3 rounded-full">
            <Button isIconOnly className="flex items-center gap-2" onPress={toggleDarkMode}>
              {isDark ? <SunIcon className="size-6"/> : <MoonIcon className="size-5"/>}
              <span>Toggle Dark Mode</span>
            </Button>
          </div> */}
        </div>
      </div>

      <div className="relative w-full h-[100vh] flex items-center justify-center font-nunito">
        {/* <SplashCursor/> */}
        <Particles
          particleColors={['#323232']}
          particleCount={100}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false} />
        <div className="w-full h-full absolute flex items-center justify-center">
          <div className="w-fit h-fit flex flex-col text-center font-raleway">
            <h1 className="text-4xl md:text-5xl mb-3 sm:mb-6 tracking-widest font-semibold"><span className="font-bold text-blue-500 dark:text-blue-400">Ryan</span> Noval Pratama</h1>
            <div className="w-full flex justify-center mb-6 sm:mb-8">
              <div className="text-lg p-4 rounded-full w-64 border dark:border-gray-900 bg-gradient-to-br not-dark:from-blue-200 not-dark:via-indigo-200 not-dark:to-red-200 dark:from-sky-500 dark:via-purple-500 dark:to-red-400">
                <TypewriterComponent
                  options={{
                    strings: ['Software Engineer', 'Full-Stack Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    cursor: '',
                  }}
                />
              </div>
            </div>
            <h2 className="text-lg font-raleway font-semibold text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">Deliver Efficiently, Builds With Integrity.</h2>
            <div className="flex w-full justify-center gap-3">
              <Link href={'https://github.com/Ryan-nv'} className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-3 px-3 sm:px-5 rounded-full w-fit border dark:border-gray-900 items-center">
                <Image src={'/assets/logos/github-black.svg'} alt="github-logo" className="aspect-square w-[20px] h-[20px] not-dark:block dark:hidden" width={20} height={20} />
                <Image src={'/assets/logos/github-white.svg'} alt="github-logo" className="aspect-square w-[20px] h-[20px] not-dark:hidden dark:block" width={20} height={20} />
                <span>GitHub</span>
              </Link>
              <Link href={'https://www.linkedin.com/in/ryan-nv/'} className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-3 px-3 sm:px-5 rounded-full w-fit border dark:border-gray-900 items-center">
                <Image src={'/assets/logos/linkedin-light.png'} alt="github-logo" className="aspect-square w-[20px] h-[20px] not-dark:block dark:hidden" width={20} height={20} />
                <Image src={'/assets/logos/linkedin-white.png'} alt="github-logo" className="aspect-square w-[20px] h-[20px] not-dark:hidden dark:block" width={20} height={20} />
                <span>LinkedIn</span>
              </Link>
              <Link href={'mailto:ryan.novatama@gmail.com'} className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-3 px-3 sm:px-5 rounded-full w-fit border dark:border-gray-900 items-center">
                <EnvelopeIcon className="size-5" />
                <span>Mail</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex w-full bottom-20 justify-center text-gray-500">
          <div className="flex items-center justify-center flex-col">
            <span>Scroll down for more</span>
            <ChevronDownIcon className="size-4 animate-float " />
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit flex flex-col items-center font-nunito mb-12" id="about">
        <h3 className="text-lg sm:text-2xl font-semibold font-raleway mb-4 sm:mb-12 ">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-6xl">
          <div className="col-span-4 p-3">
            <div className="w-full rounded-3xl border border-gray-900 p-4 sm:p-8 text-center bg-gradient-to-br from-gray-800/10 to-purple-900/10">
              <div className="w-full flex justify-center mb-3">
                <Image src="/assets/imgs/profile-pict.jpg" alt="profile-picture" className="aspect-square rounded-full mb-6" height={180} width={180} />
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <div className="aspect-square p-2 rounded-lg bg-transparent border dark:border-0 dark:bg-gradient-to-bl from-orange-500 to-yellow-950">
                    <OutlineEnvelopeIcon className="size-5" />
                  </div>
                  <span>ryan.novatama@gmail.com</span>
                </div>
                <div className="flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <div className="aspect-square p-2 rounded-lg bg-transparent border dark:border-0 dark:bg-gradient-to-b from-red-600 to-purple-600">
                    <GlobeAltIcon className="size-5" />
                  </div>
                  <span>ryan-nv</span>
                </div>
                <div className="flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <div className="aspect-square p-2 rounded-lg bg-transparent border dark:border-0 dark:bg-gradient-to-br from-blue-900 to-blue-400">
                    <MapPinIcon className="size-5" />
                  </div>
                  <span>Malang, Indonesia</span>
                </div>
                <div className="border-b border-gray-900 pb-3 mt-4">
                  <span className="font-raleway text-lg font-semibold">My Profiles</span>
                </div>
                <Link href={'https://github.com/Ryan-nv'} target="_blank" className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <Image src={'/assets/logos/github-white.svg'} className="hidden dark:block" alt="github-logo" width={20} height={20} />
                  <Image src={'/assets/logos/github-black.svg'} className="block dark:hidden" alt="github-logo" width={20} height={20} />
                  <span>Ryan-nv</span>
                </Link>
                <Link href={'https://www.instagram.com/ryan__nv/'} target="_blank" className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <Image src={'/assets/logos/instagram-white.svg'} className="hidden dark:block" alt="instagram-logo" width={20} height={20} />
                  <Image src={'/assets/logos/instagram-light.svg'} className="block dark:hidden" alt="instagram-logo" width={20} height={20} />
                  <span>ryan__nv</span>
                </Link>
                <Link href={'https://www.linkedin.com/in/ryan-nv/'} target="_blank" className="duration-200 hover:-translate-y-1 hover:ring hover:ring-blue-600/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                  <Image src={'/assets/logos/linkedin-white.png'} className="hidden dark:block" alt="instagram-logo" width={20} height={20} />
                  <Image src={'/assets/logos/linkedin-light.png'} className="block dark:hidden" alt="instagram-logo" width={20} height={20} />
                  <span>ryan-nv</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-8 p-3">
            <div className="w-full rounded-3xl border border-gray-900 p-4 sm:p-8 text-center h-full bg-gradient-to-br from-gray-800/10 to-purple-900/10">
              <h3 className="text-2xl font-semibold pb-3 border-b border-gray-900 text-justify font-raleway mb-3 sm:mb-6">👋 Hello, I am Ryan!</h3>
              <p className="text-lg pb-3 sm:pb-6 border-b border-gray-900 text-justify mb-3 sm:mb-6">A <span className="font-bold text-blue-400">Software Engineer</span>, specialized in developing intuitive, effective, and robust web applications, with over <span className="font-bold text-blue-400">2 years</span> of experience in the field</p>
              <p className="pb-3 sm:pb-6 border-b border-gray-900 text-justify mb-3 sm:mb-6 text-gray-700 dark:text-gray-400">
                Hello, My name is Ryan Noval Pratama (commonly referred to as Ryan).
                I am a software engineer that specialize in the field of web development (you can also call me a full-stack web developer!).
                I work mostly with PHP related frameworks and technologies, such as Laravel, CodeIgniter, RabbitMQ, and so on.
                Aside from those techs I am very capable when working newer web technologies such as React, NextJS, and ExpressJS, all paired with Typescript, and I do have experience building projects with these tech-stack.
                <br />
                <br />
                I love learning new things, and I&apos;m really good at learning new things.
                I value knowledge a lot, this allows me to stay at the forefront of technological innovations.
                Aside from that, I also love to help people learn new things, because I believe the highest form of understanding is to teach, to share what I know and to accept what I don&apos;t.
              </p>
              <div className="flex flex-col text-start gap-4 w-full">
                <h4 className="text-xl font-raleway font-semibold">⚡ Core Technologies</h4>
                <div className="flex flex-wrap gap-3 w-full">
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Typescript</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>PHP</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>C#</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>ASP.NET</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Laravel</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Express.js</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Next.js</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>SQL</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Node.js</span>
                  </div>
                  <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-white dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span>Linux</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 p-3">
            <div className="w-full rounded-3xl border border-gray-900 p-4 sm:p-8 bg-gradient-to-br from-sky-600/10 to-0 text-start h-full">
              <h4 className="text-xl font-raleway font-semibold dark:text-green-100 pb-3 mb-3 sm:mb-6 border-b border-indigo-950">Back-end Developer</h4>
              <div className="mb-3 pb-6 border-b border-indigo-950">
                <div className="flex gap-3">
                  <BuildingOffice2Icon className="size-5" />
                  <span className="font-semibold">Sekawan Media</span>
                </div>
                <div className="flex gap-3">
                  <ClockIcon className="size-5" />
                  <span className="font-semibold text-gray-500">2023 - Present</span>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-300">Awarded as &apos;Rookie of The Year&apos; I am responsible for building and designing the backend architecture of multiple apps across diverse industries. Most of which requires me to learn various tech stack and complex business flows while also maintain teamwork to ensure the success of project delivery.</p>
            </div>
          </div>
          <div className="col-span-4 p-3">
            <div className="w-full rounded-3xl border border-gray-900 p-4 sm:p-8 text-center bg-gradient-to-br from-green-600/10 to-0">
              <h4 className="text-xl font-raleway font-semibold dark:text-sky-100 pb-3 mb-3 sm:mb-6 border-b border-indigo-950">🚀 Available For Hire</h4>
              <div className="flex py-2 sm:py-4 px-4 sm:px-8 rounded-2xl w-full border dark:border-indigo-950 items-center text-start bg-transparent mb-3">
                <div className="flex gap-3 items-center">
                  <ClockIcon className="size-6" />
                  <span>Full-time Opportunities</span>
                </div>
              </div>
              <div className="flex py-2 sm:py-4 px-4 sm:px-8 rounded-2xl w-full border dark:border-indigo-950 items-center text-start bg-transparent mb-3">
                <div className="flex gap-3 items-center">
                  <GlobeAltIcon className="size-6" />
                  <span>Remote Positions</span>
                </div>
              </div>
              <div className="flex py-2 sm:py-4 px-4 sm:px-8 rounded-2xl w-full border dark:border-indigo-950 items-center text-start bg-transparent">
                <div className="flex gap-3 items-center">
                  <UserPlusIcon className="size-6" />
                  <span>Freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full -z-50">
          <Particles
            particleColors={['#323232']}
            particleCount={100}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false} />
        </div>
      </div>

      <div className="relative w-full h-fit flex flex-col items-center font-nunito gap-6 mb-12" id="tech-stack">
        <div className="text-center mb-4 sm:mb-12 pb-3 sm:pb-3 border-b border-slate-800 w-full md:w-128">
          <h3 className="text-lg sm:text-2xl font-semibold font-raleway">Tech-stack</h3>
          <h3 className="text-base sm:text-lg  text-slate-500">Technologies that I am familiar with</h3>
        </div>
        <div className="flex flex-col w-full items-center sm:items-start max-w-6xl gap-4 sm:gap-8 p-8 sm:p-0">
          <h4 className="font-raleway font-semibold text-2xl text-slate-900 dark:text-slate-400">⚛️ Front-end</h4>
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start">
            {techStackFrontend.map((item, i) => {
              return (
                <div key={i} className="duration-300 hover:-translate-y-2 p-3 sm:p-6 flex border border-slate-800 rounded-2xl not-dark:bg-white dark:bg-gradient-to-br dark:from-0 dark:to-slate-800/80 flex-col justify-center items-center w-32 h-40">
                  <div className="w-fit h-fit pb-3 mb-3">
                    <Image src={item.url} alt="Stack Logo" className="max-h-12 drop-shadow-lg drop-shadow-slate-900/70 dark:drop-shadow-0" height={48} width={48} />
                  </div>
                  <div className="">
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start w-full max-w-6xl gap-4 sm:gap-8 ">
          <h4 className="font-raleway font-semibold text-2xl text-slate-900 dark:text-slate-400">⚙️ Back-end</h4>
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start">
            {techStackBackend.map((item, i) => {
              return (
                <div key={i} className="duration-300 hover:-translate-y-2 p-3 sm:p-6 flex border border-slate-800 rounded-2xl not-dark:bg-white dark:bg-gradient-to-br dark:from-0 dark:to-slate-800/80 flex-col justify-center items-center w-32 h-40">
                  <div className="w-fit h-fit pb-3 mb-3">
                    <Image src={item.url} alt="Stack Logo" className="max-h-12 drop-shadow-lg drop-shadow-slate-900/70 dark:drop-shadow-0" height={48} width={48} />
                  </div>
                  <div className="">
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start w-full max-w-6xl gap-4 sm:gap-8">
          <h4 className="font-raleway font-semibold text-2xl text-slate-900 dark:text-slate-400">💾 Database</h4>
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start">
            {techStackDb.map((item, i) => {
              return (
                <div key={i} className="duration-300 hover:-translate-y-2 p-3 sm:p-6 flex border border-slate-800 rounded-2xl not-dark:bg-white dark:bg-gradient-to-br dark:from-0 dark:to-slate-800/80 flex-col justify-center items-center w-32 h-40">
                  <div className="w-fit h-fit pb-3 mb-3">
                    <Image src={item.url} alt="Stack Logo" className="max-h-12 drop-shadow-lg drop-shadow-slate-900/70 dark:drop-shadow-0" height={48} width={48} />
                  </div>
                  <div className="">
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start w-full max-w-6xl gap-4 sm:gap-8">
          <h4 className="font-raleway font-semibold text-2xl text-slate-900 dark:text-slate-400">🌐 Cloud</h4>
          <div className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-start">
            {techStackCloud.map((item, i) => {
              return (
                <div key={i} className="duration-300 hover:-translate-y-2 p-3 sm:p-6 flex border border-slate-800 rounded-2xl not-dark:bg-white dark:bg-gradient-to-br dark:from-0 dark:to-slate-800/80 flex-col justify-center items-center w-32 h-40">
                  <div className="w-fit h-fit pb-3 mb-3">
                    <Image src={item.url} alt="Stack Logo" className="max-h-12 drop-shadow-lg drop-shadow-slate-900/70 dark:drop-shadow-0" height={48} width={48} />
                  </div>
                  <div className="">
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="absolute w-full h-full -z-50">
          <Particles
            particleColors={['#323232']}
            particleCount={100}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false} />
        </div>
      </div>

      <div className="relative w-full h-fit flex flex-col items-center font-nunito gap-6 px-6 sm:px-0" id="experience">
        <div className="text-center mb-4 sm:mb-12 pb-3 sm:pb-3 border-b border-slate-800 w-full sm:w-128">
          <h3 className="text-lg sm:text-2xl font-semibold font-raleway">Experience</h3>
        </div>
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="flex flex-col w-full rounded-3xl border border-gray-900 p-8 sm:p-12 text-center h-full bg-gradient-to-br from-blue-800/10 to-0">
            <div className="flex gap-8 items-center border-b border-slate-800 pb-5">
              <div className="aspect-square p-4 sm:p-6 rounded-full bg-gradient-to-bl from-blue-500 to-blue-950">
                <BuildingOffice2Icon className="size-8 sm:size-12 text-slate-100" />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="font-semibold text-gray-500 mb-1 flex gap-2 text-sm sm:text-base items-center"><CalendarIcon className="size-3 sm:size-5" /> Jun 2023 - Present</h4>
                <h4 className="font-raleway font-semibold text-lg sm:text-xl">Back-end Developer</h4>
                <span className="text-blue-800 dark:text-blue-300 font-raleway font-semibold text-sm sm:text-base">Sekawan Media</span>
              </div>
            </div>
            <div className="flex flex-col text-start my-3">
              <span className="text-gray-600 dark:text-gray-400 font-raleway text-base sm:text-lg font-semibold">Developed high-performance, robust backends for multiple apps across diverse industry standards.</span>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-400">
              <span className="font-raleway text-lg sm:text-xl font-semibold text-foreground">🎖️ Key Responsibility </span>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400 ">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5 mt-1" />
                <span>Collaborated with production manager for 2 company&apos;s internal research project, and present the research results.</span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400 ">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5 mt-1" />
                <span>Develop backend apps using Laravel, and CodeIgniter 3 on a maintenance project and 3 start to end development projects.</span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400 ">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5 mt-1" />
                <span>Work with 2-3 developers across 4 functional teams for 4 different projects resulting in 90% success rate based on project maintainability and development success.</span>
              </div>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-800 dark:text-gray-400">
              <span className="font-raleway text-xl font-semibold text-foreground">⚙️ Technologies </span>
              <div className="flex gap-3 flex-wrap">
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>PHP</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Javascript</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Laravel</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Redis</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Bootstrap</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-400">
              <span className="font-raleway text-xl font-semibold text-foreground">🏆 Awards </span>
              <div className="flex gap-3">
                <div className="flex p-4 border border-slate-800 rounded-2xl gap-4 sm:w-[50%] flex-wrap sm:flex-nowrap w-100 sm:p-3">
                  <Image src={'/assets/imgs/rookie-of-the-year-1.jpg'} alt="Rookie Of The Year Img 1" className="rounded-xl object-cover aspect-square w-full sm:w-[164px]" height={164} width={164} ></Image>
                  <div className="flex flex-col gap-3 flex-wrap">
                    <div className="">
                      <span className="text-lg font-semibold text-foreground">Rookie Of The Year</span>
                      <span className="font-semibold text-gray-500 mb-1 flex gap-2 text-sm"><CalendarIcon className="size-4" /> Jan 2024</span>
                    </div>
                    <div className="text-start text-sm text-gray-600 dark:text-gray-400">
                      Awarded as &apos;Rookie of The Year&apos;. I was recognized for rapid learning and performance growth in as a newly joined employee.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="flex flex-col w-full rounded-3xl border border-gray-900 p-8 sm:p-12 text-center h-full bg-gradient-to-br from-blue-800/10 to-0">
            <div className="flex gap-8 items-center border-b border-slate-800 pb-5">
              <div className="text-slate-100 aspect-square p-4 sm:p-6 rounded-full bg-gradient-to-bl from-blue-500 to-blue-950">
                <BuildingOffice2Icon className="size-8 sm:size-12" />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="font-semibold text-gray-500 mb-1 flex gap-2 text-sm sm:text-base items-center"><CalendarIcon className="size-3 sm:size-5" />Apr 2024 - Dec 2024</h4>
                <h4 className="font-raleway font-semibold text-lg sm:text-xl">Lead Engineer</h4>
                <span className="text-blue-800 dark:text-blue-300 font-raleway font-semibold text-sm sm:text-base">Sekawan Media</span>
              </div>
            </div>
            <div className="flex flex-col text-start my-3">
              <span className="text-gray-600 dark:text-gray-400 font-raleway text-base sm:text-lg font-semibold">Designing, building, and coordinating developer teams to deliver multiple projects with exceptional success rate.</span>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-600 dark:text-gray-400">
              <span className="font-raleway text-lg sm:text-xl font-semibold text-foreground">🎖️ Key Responsibility </span>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Analyze tech stack, create code guideline, develop DCR, and ThiNK Hub web app using Agile SCRUM method, built on Laravel, JQuery, MySQL, and RabbitMQ.</span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Collaborate with UI/UX, System Analyst, Project Manager to determine development timeline and assist client meetings. </span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Conduct daily briefing, lead, manage, and review team&apos;s performance in developing ThiNK Hub, DCR in a team that consisted of 4 developers.</span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Mentored 4 full-stack and back-end developer interns that varies from zero or basic knowledge resulting in 80% rate of success based on intern&apos;s ability to develop web applications in their respective specialization.</span>
              </div>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-800 dark:text-gray-400">
              <span className="font-raleway text-xl font-semibold text-foreground">⚙️ Technologies </span>
              <div className="flex gap-3 w-full flex-wrap">
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>PHP</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Javascript</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Laravel</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Redis</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Bootstrap</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>JQuery</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>RabbitMQ</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Gitlab</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Firebase</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Docker</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="flex flex-col w-full rounded-3xl border border-gray-900 p-8 sm:p-12 text-center h-full bg-gradient-to-br from-red-800/10 to-0">
            <div className="flex gap-8 items-center border-b border-slate-800 pb-5">
              <div className="aspect-square p-4 sm:p-6 rounded-full bg-gradient-to-bl from-red-800 to-red-400 text-slate-100">
                <HomeModernIcon className="size-8 sm:size-12" />
              </div>
              <div className="flex flex-col text-start">
                <h4 className="font-semibold text-gray-500 mb-1 flex gap-2 text-sm sm:text-base items-center"><CalendarIcon className="size-3 sm:size-5" />Apr 2022 - Oct 2022</h4>
                <h4 className="font-raleway font-semibold text-lg sm:text-xl">Software Engineer</h4>
                <span className="text-red-600 dark:text-red-300 font-semibold font-raleway text-sm sm:text-base">UBIG</span>
              </div>
            </div>
            <div className="flex flex-col text-start my-3">
              <span className="text-gray-600 dark:text-gray-400 font-raleway text-base sm:text-lg font-semibold">Building exceptional systems, sharing knowledge via mentorship, and many more.</span>
            </div>
            <div className="flex flex-col text-start my-3 gap-3 text-gray-600 dark:text-gray-400">
              <span className="font-raleway text-lg sm:text-xl font-semibold text-foreground">🎖️ Key Responsibility </span>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Leading the development of Qurani.IO, in a team that consisted of 8 people, resulting in 50% success rate based on projects completion.</span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Involved in a company research project in effort to develop a blockchain network resulting in 80% result based on project&apos;s completion and research success. </span>
              </div>
              <div className="flex gap-2 ms-0 sm:ms-8 items-start md:items-center">
                <CheckCircleIcon className="text-green-400 aspect-square w-5 min-w-5" />
                <span>Trained 50+ people on 2 separate training conducted by company and mentored 7 people, resulting in 75% success rate based on overall trainee and mentee&apos;s understanding over given subject.</span>
              </div>
            </div>

            <div className="flex flex-col text-start my-3 gap-3 text-gray-600 dark:text-gray-400">
              <span className="font-raleway text-xl font-semibold text-foreground">⚙️ Technologies </span>
              <div className="flex gap-3 w-full flex-wrap">
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>C#</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Javascript</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Typescript</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>.NET</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>MySQL</span>
                </div>
                <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                  <span>Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full -z-50">
          <Particles
            particleColors={['#323232']}
            particleCount={100}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false} />
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full mb-32 md:mb-80 px-6 sm:px-0" id="projects">
        <div className="flex max-2-6xl w-full md:w-6xl h-fit mt-24">
          <div className="flex flex-col relative w-full items-center">
            <div className="text-center mb-4 sm:mb-12 pb-3 sm:pb-3 border-b border-slate-800 w-full md:w-128">
              <h3 className="text-lg sm:text-2xl font-semibold font-raleway mb-3">Featured Projects</h3>
              <h3 className="text-xl font-raleway font-semibold text-gray-600 dark:text-gray-400">Ideas I&apos;ve Brought to Life</h3>
            </div>
            <div className="w-full flex justify-center ">
              <div className="h-64 sm:h-148 md:w-[55%] relative scale-70 sm:scale-100 text-gray-600 dark:text-gray-400">
                <CardSwap
                  cardDistance={80}
                  verticalDistance={80}
                  delay={8000}
                  pauseOnHover={false}
                  width={724}
                  height={548}
                >
                  <Card className="not-dark:bg-white not-dark:ring dark:bg-gradient-to-br from-indigo-950 to-gray-950 border-1 border-indigo-950 flex flex-col duration-300 hover:ring-3 hover:ring-blue-500">
                    <div className="flex border-b justify-between p-3 items-center">
                      <h3 className="text-lg flex gap-2 items-center">
                        <BanknotesIcon className="size-6 min-w-6" />
                        <span>Mitramapay.id</span>
                      </h3>

                      <div className="flex items-center gap-2 justify-left rounded-full bg-green-500/20 text-green-800 dark:text-green-100 p-3 min-w-24 text-center border border-green-100">
                        <CheckCircleIcon className="size-5" />
                        <span>Live</span>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <div className="w-[50%] flex flex-col">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-green-900 to-green-400">
                            <Squares2X2Icon className="size-5 text-slate-100" />
                          </div>
                          <span>Features</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>SEO Optimization</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Microanimations</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-900 to-blue-400">
                            <CubeTransparentIcon className="size-5 text-slate-100" />
                          </div>
                          <span>Deliverables</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Fully Functional Website</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Google Search Console Dashboard</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <p className="">This is one of the very first project that I&apos;ve worked with Node.js environment. It is simple, but I try to make sure to deliver maximum quality.</p>
                    </div>
                    <div className="mt-auto w-full border-t p-3 flex flex-col gap-3 ">
                      <h3 className=" text-lg">Tech Stack</h3>
                      <div className="flex gap-2">
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Next.js</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Typescript</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="not-dark:bg-white not-dark:ring dark:bg-gradient-to-br from-indigo-950 to-gray-950 border-1 border-indigo-950 flex flex-col duration-300 hover:ring-3 hover:ring-blue-500">
                    <div className="flex border-b justify-between p-3 items-center">
                      <h3 className="text-lg flex gap-2 items-center">
                        <GlobeAsiaAustraliaIcon className="size-6 min-w-6" />
                        <span>SMSCROPS</span>
                      </h3>

                      <div className="flex items-center gap-2 justify-left rounded-full bg-green-500/20 text-green-800 dark:text-green-100 p-3 min-w-24 text-center border border-green-100">
                        <CheckCircleIcon className="size-5" />
                        <span>Live</span>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <div className="w-[50%] flex flex-col">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-green-900 to-green-400">
                            <Squares2X2Icon className="size-5 text-slate-100" />
                          </div>
                          <span>Features</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Mobile App Inputs</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Microservices</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Excel Data Export/Import</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Google Map Integration</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-900 to-blue-400">
                            <CubeTransparentIcon className="size-5 text-slate-100" />
                          </div>
                          <span>Deliverables</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Feature Enhancement</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>App Maintenance</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Web App</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Mobile App</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Backend API</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <p className="">As newly joined developer, I participated in the enhancement process of this app, which includes adding multiple data monitoring, enhancing performance, and enhancing legacy codes to make sure the app runs smoothly.</p>
                    </div>
                    <div className="mt-auto w-full border-t p-3 flex flex-col gap-3 ">
                      <h3 className=" text-lg">Tech Stack</h3>
                      <div className="flex gap-2">
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>PHP</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Javascript</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Redis</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>RabbitMQ</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>MySQL</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="not-dark:bg-white not-dark:ring dark:bg-gradient-to-br from-indigo-950 to-gray-950 border-1 border-indigo-950 flex flex-col duration-300 hover:ring-3 hover:ring-blue-500">
                    <div className="flex border-b justify-between p-3 items-center">
                      <h3 className="text-lg flex gap-2 items-center">
                        <CogIcon className="size-6 min-w-6" />
                        <span>Digital Controlling & Reporting</span>
                      </h3>

                      <div className="flex items-center gap-2 justify-left rounded-full bg-green-500/20 text-green-800 dark:text-green-100 p-3 min-w-24 text-center border border-green-100">
                        <CheckCircleIcon className="size-5" />
                        <span>Live</span>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <div className="w-[50%] flex flex-col">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-green-900 to-green-400">
                            <Squares2X2Icon className="size-5 text-slate-100" />
                          </div>
                          <span>Features</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>QR Code Scans</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Excel Data Export/Import</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-900 to-blue-400">
                            <CubeTransparentIcon className="size-5 text-slate-100" />
                          </div>
                          <span>Deliverables</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Web App</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <p className="">As a team leader, I delivered this app, which is a data monitoring app for a company in manufacturing company, ensuring reliability and project success.</p>
                    </div>
                    <div className="mt-auto w-full border-t p-3 flex flex-col gap-3 ">
                      <h3 className=" text-lg">Tech Stack</h3>
                      <div className="flex gap-2">
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>PHP</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Laravel</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Javascript</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Redis</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>RabbitMQ</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>MySQL</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card className="not-dark:bg-white not-dark:ring dark:bg-gradient-to-br from-indigo-950 to-gray-950 border-1 border-indigo-950 flex flex-col duration-300 hover:ring-3 hover:ring-blue-500">
                    <div className="flex border-b justify-between p-3 items-center">
                      <h3 className="text-lg flex gap-2 items-center">
                        <OutlineCubeIcon className="size-6 min-w-6" />
                        <span>Blockchain Development</span>
                      </h3>

                      <div className="flex items-center gap-2 justify-left rounded-full bg-red-500/20 text-red-800 dark:text-red-100 p-3 min-w-24 text-center border border-red-100">
                        <XCircleIcon className="size-5" />
                        <span>Not Live</span>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <div className="w-[50%] flex flex-col">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-green-900 to-green-400">
                            <Squares2X2Icon className="size-5 text-slate-100" />
                          </div>
                          <span>Features</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Cryptocurrency Mechanism</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Smart contract mechanism</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Consensus Based Mining Mechanism</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CheckCircleIconSolid className="size-4 min-w-4 text-green-500" />
                            <span>Node Synchronization</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[50%]">
                        <h3 className="text-lg font-raleway flex gap-3 items-center mb-3 sm:mb-6">
                          <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-900 to-blue-400">
                            <CubeTransparentIcon className="size-5 text-slate-100" />
                          </div>
                          <span>Deliverables</span>
                        </h3>
                        <div className="flex flex-col gap-3 ps-8">
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Crypto Wallet</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <CubeIcon className="size-4 min-w-4 text-blue-500" />
                            <span>Blockchain System</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 w-full">
                      <p className="">I Engineered a working blockchain system equipped with SHA-256 hashing as the cryptographic algorithm, and implement cryptocurrencies within the system, I also made the system to be able to allow smart-contracts.</p>
                    </div>
                    <div className="mt-auto w-full border-t p-3 flex flex-col gap-3 ">
                      <h3 className=" text-lg">Tech Stack</h3>
                      <div className="flex gap-2">
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>C#</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>ASP.NET</span>
                        </div>
                        <div className="flex gap-3 py-1 sm:py-2 px-2 sm:px-4 rounded-2xl w-fit border dark:border-indigo-950 items-center text-start not-dark:bg-transparent dark:bg-gradient-to-br from-indigo-950 to-slate-950">
                          <span>Typescript</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full -z-50">
          <Particles
            particleColors={['#323232']}
            particleCount={100}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false} />
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full mb-24 px-6 sm:px-0" id="contact">
        <div className="flex max-2-6xl md:w-6xl h-fit mt-24">
          <div className="flex flex-col relative w-full items-center">
            <div className="text-center mb-4 sm:mb-12 pb-3 sm:pb-3 border-b border-slate-800 w-full sm:w-128">
              <h3 className="text-lg sm:text-2xl font-semibold font-raleway mb-3">Contact</h3>
              <h3 className="text-lg sm:text-xl font-raleway font-semibold text-gray-600 dark:text-gray-400">Looking to work together?. Reach me out!</h3>
            </div>
            <div className="w-full flex justify-center gap-3 flex-col sm:flex-row">
              <Link href="mailto:ryan.novatama@gmail.com" className="duration-200 hover:-translate-y-2 hover:shadow hover:shadow-foreground/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                <div className="aspect-square p-2 rounded-lg bg-gradient-to-bl text-slate-100 from-blue-500 to-blue-950">
                  <OutlineEnvelopeIcon className="size-5" />
                </div>
                <span>ryan.novatama@gmail.com</span>
              </Link>
              <Link href="https://www.instagram.com/ryan__nv/" className="duration-200 hover:-translate-y-2 hover:shadow hover:shadow-foreground/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-800 via-purple-800 to-red-800">
                  <Image src="/assets/logos/instagram-white.svg" className={`size-5`} alt="instagram-icon" width={20} height={20}></Image>
                </div>
                <span>ryan__nv</span>
              </Link>
              <Link href="https://www.linkedin.com/in/ryan-nv/" className="duration-200 hover:-translate-y-2 hover:shadow hover:shadow-foreground/20 flex gap-3 py-2 sm:py-4 px-3 sm:px-6 rounded-2xl w-full border dark:border-gray-900 items-center text-start">
                <div className="aspect-square p-2 rounded-lg bg-gradient-to-br from-blue-800  to-blue-950">
                  <Image src="/assets/logos/linkedin-white.png" className={`size-5 min-w-5 aspect-square`} alt="linkedin-icon" width={20} height={20}></Image>
                </div>
                <span>ryan-nv</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full -z-50">
          <Particles
            particleColors={['#323232']}
            particleCount={100}
            particleSpread={5}
            speed={0.1}
            particleBaseSize={50}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false} />
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full mb-16">
        <div className="flex max-2-6xl w-full sm:w-6xl h-fit flex-col">
          <div className="flex flex-col relative w-full items-center mb-16">
            <h3 className="text-xl font-raleway font-semibold text-gray-600 dark:text-gray-400">Built using Next.js</h3>
          </div>
          <div className="flex gap-3 items-center justify-center text-gray-500 dark:text-gray-300 mb-2 w-full flex-col sm:flex-row">
            <span>Ryan Noval Pratama © 2025</span>
            <span className="hidden sm:block">|</span>
            <Link href="mailto:ryan.novatama@gmail.com">ryan.novatama@gmail.com</Link>
          </div>
          <div className="flex gap-3 justify-center text-gray-400">
            <span className="text-sm">please reach out to me for takedowns and attribution.</span>
          </div>
        </div>
      </div>
    </div >
  );
}
