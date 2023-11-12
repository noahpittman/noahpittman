"use client";

import Link from "next/link";
import { FileIcon } from "@radix-ui/react-icons";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
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
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryDialog from "../components/GalleryDialog";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Projects />
			{/* <Blog /> */}
			<Contact />
			<Footer />
		</>
	);
}

export function Hero() {
	return (
		<div className="min-h-screen flex flex-col md:gap-4 gap-16 mb-8 sm:mb-0 ">
			<section className="space-y-4 -mt-4 md:-mt-0 pt-16 md:pb-12 md:py-24">
				<span className="font-mono opacity-75 text-lg bg-foreground/10 p-1 px-2 rounded-md">
					Hi, my name is
				</span>
				<h1 className="text-5xl flex items-center md:text-7xl font-semibold tracking-wide ">
					Noah Pittman.
					<span className="pl-4 text-4xl md:text-6xl opacity-100">👋</span>
				</h1>
				<h2 className="text-2xl md:text-4xl tracking-tight md:gap-4 flex flex-col md:flex-row opacity-80">
					Built from scratch.
				</h2>
				<p className="sm:text-lg max-w-prose tracking-tight">
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
	const hdGallery = [
		"/donebyHD_gallery/Home.png",
		"/donebyHD_gallery/AboutPage.png",
		"/donebyHD_gallery/Portfolio.png",
		"/donebyHD_gallery/Contact.png",
	];

	return (
		<div id="projects" className="space-y-12 pt-2">
			<SectionHeading scrollto={"projects"}>Projects</SectionHeading>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:pr-0 max-w-screen-xl">
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

							<GalleryDialog name="donebyHD" hrefArray={hdGallery} />

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
								generation, a rich UI, and{" "}
								<Link
									href={"/blog"}
									className="underline decoration-muted-foreground hover:text-muted-foreground transition-colors"
								>
									static blog pages
								</Link>{" "}
								generated at build time from markdown files.
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

// export function Blog() {}

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
