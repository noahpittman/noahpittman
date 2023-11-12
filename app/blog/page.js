import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Navbar } from "../../components/Navbar";

function PostCard(post) {
	return (
		<div className="mb-8 border p-4 rounded-md shadow-sm border-muted">
			<h2 className="mb-1 text-xl space-x-4">
				<Link
					href={post.url}
					className="text-foreground hover:text-foreground/50	transition-all underline"
				>
					{post.title}
				</Link>
			</h2>
			<time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
				{format(parseISO(post.date), "LLLL d, yyyy")}
			</time>
			<div className="line-clamp-3 sm:text-normal text-sm text-muted-foreground">
				{post.description}
			</div>
		</div>
	);
}

export default function Home() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	);

	return (
		<>
			<Navbar />

			<div className="md:mt-16">
				<h1 className="text-xl font-bold">
					Blog<span className="text-muted-foreground">: Latest Posts</span>
				</h1>
				<div className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2">
					{posts.length == 0 && (
						<div className="text-muted-foreground">No posts found</div>
					)}
					{posts.map((post, idx) => (
						<PostCard key={idx} {...post} />
					))}
				</div>
			</div>
		</>
	);
}
