import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Navbar } from "../../../components/Navbar";
import { Button } from "/components/ui/button.jsx";
import Link from "next/link";
import "./blog.css";
import Footer from "../../../components/Footer";

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const PostLayout = ({ params }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<div className="max-w-screen-md mx-auto">
			<div className="flex gap-8">
				<Navbar linksOnly />
				<Button asChild variant="outline" size="lg">
					<Link className="hidden md:flex" href={"/blog"}>
						Back to Posts
					</Link>
				</Button>
			</div>
			<Button asChild variant="outline" className="-mt-4" size="lg">
				<Link className="md:hidden flex" href={"/blog"}>
					Back to Posts
				</Link>
			</Button>
			<article className="p-4 md:pt-16">
				<div className="mb-8 space-y-2">
					<h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
					<p className="text-muted-foreground text-sm max-w-prose">
						{post.description}
					</p>
					<div className="flex sm:flex-col sm:justify-normal justify-between">
						<time
							dateTime={post.date}
							className="text-xs text-muted-foreground/60"
						>
							{format(parseISO(post.date), "LLLL d, yyyy")}
						</time>
						<Link
							href={"/blog"}
							className="text-muted-foreground hover:text-foreground text-xs p-0"
						>
							@noahpittman
						</Link>
					</div>
					<div className="w-full h-[1px] border-b border-b-muted-foreground/50 pt-4" />
				</div>
				<div
					className="[&>*]:mb-3 [&>*:last-child]:mb-0 max-w-[65ch]"
					dangerouslySetInnerHTML={{ __html: post.body.html }}
				/>
			</article>
			<Footer />
		</div>
	);
};

export default PostLayout;
