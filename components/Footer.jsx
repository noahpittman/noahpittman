import Link from "next/link";
import { Separator } from "./ui/separator";
import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	GlobeIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
	const tools = [
		{
			name: "summaraize",
			href: "https://trysummaraize.vercel.app/",
			value: "AI Article Summarizer",
		},
		// {
		// 	name: "mdeditor",
		// 	href: "https://markdown-editor-nrp.vercel.app/",
		// 	value: "Markdown Editor",
		// },
	];

	const projects = [
		{
			name: "wavlee",
			href: "https://wavlee.com",
			value: "wavlee.com",
		},
		{
			name: "hd",
			href: "https://donebyhd.com",
			value: "donebyhd.com",
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
			name: "contact",
			href: "/#contact",
			value: "Contact",
		},
		{
			name: "blog",
			href: "/blog",
			value: "Blog",
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

				<div className="flex flex-col space-y-1">
					<p className="font-semibold underline underline-offset-4">Projects</p>
					{projects.map((project) => (
						<Link
							key={project.name}
							className="text-muted-foreground hover:text-primary transition-colors w-fit"
							href={project.href}
							target="_blank"
						>
							{project.value}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
