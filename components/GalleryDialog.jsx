import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import ImageSlider from "./ImageSlider";

const GalleryDialog = ({ name, hrefArray }) => {
	return (
		<Dialog>
			<Button asChild size="lg" variant="ghost">
				<DialogTrigger className="w-full">Gallery</DialogTrigger>
			</Button>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						<span className="text-muted-foreground">{name}:</span> Gallery
					</DialogTitle>
					<Separator />
				</DialogHeader>

				<ImageSlider hrefArray={hrefArray} />
			</DialogContent>
		</Dialog>
	);
};

export default GalleryDialog;
