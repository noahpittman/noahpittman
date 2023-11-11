import Link from "next/link";

const SectionHeading = ({ children, scrollto }) => {
	return (
		<h2 className="text-4xl font-semibold">
			{children}{" "}
			<Link
				href={`/#${scrollto}`}
				scroll
				className="opacity-50 text-2xl pl-2 hidden sm:inline-block"
			>
				#
			</Link>{" "}
			<Link
				href={`/#home`}
				scroll
				className=" opacity-40 font-normal underline text-sm hidden sm:inline-block"
			>
				Back to top
			</Link>
		</h2>
	);
};

export default SectionHeading;
