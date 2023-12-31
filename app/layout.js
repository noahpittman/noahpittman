import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Noah Pittman",
	description:
		"Noah Pittman: full stack developer, music producer, video editor, & avid reader.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${inter.className} bg-background`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					storageKey="site-theme"
				>
					<Toaster position="top-center" />
					<div
						className="flex min-h-screen flex-col p-10 md:p-24 max-w-screen-2xl mx-auto"
						id="home"
					>
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
