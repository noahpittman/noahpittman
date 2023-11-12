import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
	FileIcon,
	GitHubLogoIcon,
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";

export function Navbar({ linksOnly }) {
	const navigation = [
		{ route: "/#home", name: "Home" },
		{ route: "/#projects", name: "Projects" },
		{ route: "/#contact", name: "Contact" },
		{ route: "/blog", name: "Blog" },
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
