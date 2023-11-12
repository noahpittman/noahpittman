import { Navbar } from "../components/Navbar";

export const metadata = {
	title: "404 Not Found",
	description:
		"Noah Pittman: full stack developer, music producer, video editor, & avid reader.",
};

const Custom404 = () => {
	return (
		<>
			<Navbar linksOnly />
			<div className="flex h-96 justify-center items-end">
				<div className="flex flex-col items-center">
					<p className="text-4xl sm:text-6xl font-semibold">404 Not Found</p>
					<p className="text-muted-foreground">
						Try another page, or check your URL.
					</p>
				</div>
			</div>
		</>
	);
};

export default Custom404;
