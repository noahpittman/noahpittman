"use client";

import Link from "next/link";
import {
	EnvelopeClosedIcon,
	FileIcon,
	GitHubLogoIcon,
	GlobeIcon,
	HamburgerMenuIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import emailjs from "@emailjs/browser";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import toast from "react-hot-toast";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export function Navbar({ linksOnly }) {
	const navigation = [
		{ route: "/#home", name: "Home" },
		{ route: "/#projects", name: "Projects" },
		{ route: "/#blog", name: "Blog" },
		{ route: "/#contact", name: "Contact" },
	];

	return (
		<header className="flex flex-wrap w-full justify-end md:justify-between items-center gap-4">
			<div className="hidden md:flex gap-2">
				{navigation.map((route) => (
					<div key={route.name} className="flex">
						<Button variant="ghost" asChild>
							<Link scroll href={route.route}>
								{route.name}
							</Link>
						</Button>
						<Separator className="ml-2" orientation="vertical" />
					</div>
				))}
			</div>
			<div className="fixed z-10 md:hidden">
				<Sheet>
					<SheetTrigger>
						<div className="border border-input bg-secondary/25 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
							<HamburgerMenuIcon className="h-4 w-4" />
						</div>
					</SheetTrigger>

					<div className="space-y-4">
						<SheetContent>
							<div className="pb-20">
								<SheetHeader>
									<SheetTitle className="pb-4 text-center">
										Navigation
									</SheetTitle>
								</SheetHeader>
								<Separator className="my-4" />
								<div className="flex flex-col gap-4">
									{navigation.map((route) => (
										<Button key={route.name} asChild variant="ghost" size="lg">
											<Link scroll href={route.route}>
												{route.name}
											</Link>
										</Button>
									))}
								</div>
							</div>
							<div>
								<SheetHeader>
									<SheetTitle className="pb-4 text-center">Resumé</SheetTitle>
								</SheetHeader>
								<Separator className="my-4" />
								<div className="flex flex-col gap-4">
									<Button asChild variant="ghost" size="lg">
										<Link target="_blank" href={"/MyResume.pdf"}>
											View
										</Link>
									</Button>
								</div>
							</div>
						</SheetContent>
					</div>
				</Sheet>
			</div>
			{!linksOnly && (
				<div className="hidden md:flex gap-4 items-center">
					<ModeToggle />
					<Button asChild target="_blank" variant="outline">
						<Link href={"https://github.com/noahpittman"}>
							<GitHubLogoIcon className="mr-2 h-4 w-4" />
							GitHub
						</Link>
					</Button>
					<Button asChild variant="secondary">
						<Link target="_blank" href={"/MyResume.pdf"}>
							<FileIcon className="mr-2 h-4 w-4" />
							Resumé
						</Link>
					</Button>
				</div>
			)}
		</header>
	);
}

export function Hero() {
	return (
		<div className="min-h-screen flex flex-col md:gap-4 gap-16 mb-8 sm:mb-0">
			<section className="space-y-4 -mt-4 md:-mt-0 pt-16 md:pb-12 md:py-24">
				<span className="font-mono opacity-75 text-lg bg-foreground/10 p-1 px-2 rounded-md">
					Hi, my name is
				</span>
				<h1 className="text-5xl flex items-center md:text-7xl font-semibold tracking-wide ">
					Noah Pittman.
					<span className="pl-4 text-4xl md:text-6xl opacity-100">👋</span>
				</h1>
				<h2 className="text-3xl md:text-4xl tracking-tight md:gap-4 flex flex-col md:flex-row opacity-80">
					Built from scratch.
				</h2>
				<p className="text-lg max-w-[65ch] tracking-tight">
					{
						"I'm a self-taught full stack web developer with a passion for learning, and a burning desire to create the best work possible. Check below to see some of my projects."
					}
					<br />
					<br />
					{
						"When I'm not coding or working on projects, I'm making music, editing video, or reading greek philosophy. Contact me if you have a project you want to discuss!"
					}
				</p>
			</section>
			<div>
				<Stack />
			</div>
		</div>
	);
}

export function Stack() {
	const techStack = [
		"HTML",
		"CSS",
		"JavaScript",
		"React",
		"TypeScript",
		"Node.js",
		"Express",
		"MySQL",
		"UI/UX",
	];

	return (
		<>
			<div
				className="
					slider max-w-screen-lg mx-auto pointer-events-none relative w-full grid place-items-center overflow-hidden

					before:absolute before:bg-gradient-to-r before:from-background before:h-full before:w-1/4 before:z-[2] before:pointer-events-none before:left-0 before:top-0

					after:absolute after:bg-gradient-to-r after:from-background after:h-full after:w-1/4 after:z-[2] after:pointer-events-none after:right-0 after:top-0
				"
			>
				<div className="slide-track my-8">
					{techStack.reverse().map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
					{techStack.map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
					{techStack.reverse().map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
					{techStack.map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
				</div>
			</div>
			<div
				className="
						slider max-w-screen-lg mx-auto relative w-full grid place-items-center overflow-hidden pointer-events-none

						before:absolute before:bg-gradient-to-r before:from-background before:h-full before:w-1/4 before:z-[2] before:pointer-events-none before:left-0 before:top-0
						
						after:absolute after:bg-gradient-to-r after:from-background after:h-full after:w-1/4 after:z-[2] after:pointer-events-none after:right-0 after:top-0
					"
			>
				<div className="slide-track2 my-4">
					{techStack.reverse().map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
					{techStack.map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
					{techStack.reverse().map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 border border-foreground/25 shadow-sm rounded-md"
						>
							{tech}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export function Projects() {
	return (
		<div id="projects" className="space-y-12 pt-2">
			<SectionHeading scrollto={"projects"}>Projects</SectionHeading>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pr-9 sm:pr-0 max-w-screen-xl">
					<Card className=" lg:aspect-video dark:border-secondary bg-background/50 transition-all lg:hover:scale-[1.01]">
						<CardHeader>
							<CardTitle className="flex items-center md:text-2xl">
								<FileIcon className="mr-2" />
								donebyHD<span className="opacity-50">.com</span>
							</CardTitle>
							<CardDescription>
								Made for a client. A full stack portfolio & branding website
								complete with a total CRUD API functionality, and Google
								authentication. Custom API connected to a MySQL database &
								managed from a custom CMS dashboard.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col justify-around h-48">
							<Button asChild size="lg">
								<Link target="_blank" href={"https://donebyhd.com"}>
									Live Demo
								</Link>
							</Button>
							<Button
								size="lg"
								variant="ghost"
								className="blur-sm pointer-events-none"
							>
								Gallery
							</Button>
							<Button asChild size="lg" variant="ghost">
								<Link
									target="_blank"
									href={"https://github.com/noahpittman/hd-entertainment"}
								>
									Repository
								</Link>
							</Button>
						</CardContent>
					</Card>
					<Card className=" lg:aspect-video dark:border-secondary bg-background/50 transition-all lg:hover:scale-[1.01] blur-sm pointer-events-none">
						<CardHeader>
							<CardTitle className="flex items-center md:text-2xl">
								<FileIcon className="mr-2" />
								null
							</CardTitle>
							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
								expedita molestiae reprehenderit. Architecto earum quae porro
								commodi sapiente sint ea perferendis nisi, magni id. Optio
								expedita laborum ab reiciendis. Dolor.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col justify-around h-48">
							<Button size="lg">Live Demo</Button>
							<Button size="lg" variant="ghost">
								Gallery
							</Button>
							<Button size="lg" variant="ghost">
								Repository
							</Button>
						</CardContent>
					</Card>
					<Card className=" lg:aspect-video dark:border-secondary bg-background/50 transition-all lg:hover:scale-[1.01] blur-sm pointer-events-none">
						<CardHeader>
							<CardTitle className="flex items-center md:text-2xl">
								<FileIcon className="mr-2" />
								null
							</CardTitle>
							<CardDescription>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
								laborum omnis reiciendis cupiditate maxime in architecto
								consectetur earum minus accusamus. Neque harum officiis aut
								nemo. Maxime et delectus optio ipsa.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col justify-around h-48">
							<Button size="lg">Live Demo</Button>
							<Button size="lg" variant="ghost">
								Gallery
							</Button>
							<Button size="lg" variant="ghost">
								Repository
							</Button>
						</CardContent>
					</Card>
					<Card className="bg-primary/90 text-secondary lg:aspect-video dark:border-secondary transition-all lg:hover:scale-[1.01] ">
						<CardHeader>
							<CardTitle className="flex items-center md:text-2xl">
								<FileIcon className="mr-2" />
								noahpittman.xyz
							</CardTitle>
							<CardDescription className="text-secondary/95">
								My own portfolio of course! Made with Next.js, and a few
								JavaScript libraries, this website features static HTML
								generation, a rich UI, and
								<span className="blur-sm">
									static blog pages from markdown files.
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col justify-around h-48">
							<Button size="lg" variant="secondary" disabled>
								Live Demo
							</Button>
							<Button size="lg" variant="ghost" disabled>
								Gallery
							</Button>
							<Button asChild size="lg" variant="ghost">
								<Link
									target="_blank"
									href={"https://github.com/noahpittman/noahpittman"}
								>
									Repository
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export function Contact() {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [messageInput, setMessageInput] = useState("");

	const handleName = (e) => {
		setNameInput(e.target.value);
	};
	const handleEmail = (e) => {
		setEmailInput(e.target.value);
	};
	const handleMessage = (e) => {
		setMessageInput(e.target.value);
	};

	const clearForm = () => {
		setNameInput("");
		setEmailInput("");
		setMessageInput("");
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"noahpittman",
				"noahpittman_template",
				form.current,
				"OUH8QIDn0ceYoUaiW"
			)
			.then(
				(result) => {
					// console.log(result.text);
					toast.success("Email sent!");
					clearForm();
				},
				(error) => {
					// console.log(error.text);
					toast.error("Something went wrong.");
				}
			);
	};

	return (
		<section className="py-24" id="contact">
			<SectionHeading scrollto={"contact"}>Got a Project?</SectionHeading>
			<p className="text-muted-foreground py-2 max-w-[65ch]">
				{
					"You can contact me here and I'll get an email with your message. I'll be sure to respond as soon as possible!"
				}
			</p>
			<div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="max-w-lg py-4 space-y-4"
				>
					<div>
						<Label htmlFor="name">Name</Label>
						<Input
							onChange={handleName}
							required
							value={nameInput}
							id="name"
							name="user_name"
							autoComplete="given-name"
							placeholder="Enter your name"
						/>
					</div>
					<div>
						<Label htmlFor="email">Email</Label>
						<Input
							onChange={handleEmail}
							required
							value={emailInput}
							type="text"
							name="user_email"
							autoComplete="email"
							id="email"
							placeholder="Enter your email address"
						/>
					</div>
					<div>
						<Label htmlFor="message">Message</Label>
						<Textarea
							onChange={handleMessage}
							required
							value={messageInput}
							id="message"
							placeholder="Enter your message here"
							name="message"
							rows={4}
						/>
						<p className="text-xs text-muted-foreground">
							Your message will be sent directly to my email address.
						</p>
					</div>

					<Button type="submit">{"Let's Discuss!"}</Button>
				</form>
			</div>
		</section>
	);
}

export function Footer() {
	const contactInfo = [
		{ value: "noahpittman00@gmail.com", logo: "" },
		{ value: "www.noahpittman.xyz", logo: "website" },
	];

	const tools = [
		{
			name: "summaraize",
			href: "https://trysummaraize.vercel.app/",
			value: "AI Article Summarizer",
		},
		{
			name: "mdeditor",
			href: "https://markdown-editor-nrp.vercel.app/",
			value: "Markdown Editor",
		},
	];

	const navigation = [
		{
			name: "home",
			href: "/#home",
			value: "Home",
		},
		{
			name: "projects",
			href: "/#projects",
			value: "Projects",
		},
		{
			name: "blog",
			href: "/#blog",
			value: "Blog",
		},
		{
			name: "allposts",
			href: "/#blog",
			value: "╰ All Blog Posts (Under Development)",
		},
		{
			name: "contact",
			href: "/#contact",
			value: "Contact",
		},
	];

	return (
		<div
			className="w-full mt-12 p-4 border-t border-t-muted-foreground flex min-h-52 flex-col sm:flex-row"
			id="footer"
		>
			<div className=" max-w-xs">
				<h2 className="text-2xl">Noah Pittman</h2>
				<p className="text-xl text-muted-foreground">Developer, Creative.</p>
				<Separator />
				<div className="space-y-2 py-4">
					<div className="flex items-center text-muted-foreground">
						<EnvelopeClosedIcon className="h-4 w-4 mr-2" />
						<p>noahpittman00@gmail.com</p>
					</div>
					<div className="flex items-center text-muted-foreground">
						<GlobeIcon className="h-4 w-4 mr-2" />
						<p>www.noahpittman.xyz</p>
					</div>
					<div className="w-full flex gap-12 h-12 items-center">
						<Link
							href={"https://www.linkedin.com/in/noahrileypittman/"}
							target="_blank"
						>
							<LinkedInLogoIcon className="h-6 w-6 transition-all md:hover:scale-[1.15]" />
						</Link>
						<Link href={"https://github.com/noahpittman"} target="_blank">
							<GitHubLogoIcon className="h-6 w-6 transition-all md:hover:scale-[1.15]" />
						</Link>
						<Link
							href={"https://www.instagram.com/noahpittman.digital/"}
							target="_blank"
						>
							<InstagramLogoIcon className="h-6 w-6 transition-all md:hover:scale-[1.15]" />
						</Link>
						<Link href={"https://www.twitter.com/n0ahpittman/"} target="_blank">
							<TwitterLogoIcon className="h-6 w-6 transition-all md:hover:scale-[1.15]" />
						</Link>
					</div>
				</div>
			</div>

			<Separator className="sm:w-[1px] sm:h-52 sm:mx-4" />

			<div className="sm:p-4 pt-4 sm:pt-0 flex flex-col sm:flex-row flex-wrap gap-12 sm:gap-16">
				<div className="flex flex-col space-y-1">
					<p className="font-semibold underline underline-offset-4">
						Navigation
					</p>
					{navigation.map((route) => (
						<Link
							className="text-muted-foreground hover:text-primary transition-colors w-fit"
							href={route.href}
							key={route.name}
						>
							{route.value}
						</Link>
					))}
				</div>

				<div className="flex flex-col space-y-1">
					<p className="font-semibold underline underline-offset-4">Tools</p>
					{tools.map((tool) => (
						<Link
							key={tool.name}
							className="text-muted-foreground hover:text-primary transition-colors w-fit"
							href={tool.href}
							target="_blank"
						>
							{tool.value}
						</Link>
					))}
					<p className="text-muted-foreground text-sm">To be continued...</p>
				</div>
			</div>
		</div>
	);
}
