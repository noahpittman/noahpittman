"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import { useState } from "react";
import "./ImageSlider.css";
import { Separator } from "./ui/separator";

export default function ImageSlider({ hrefArray }) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
		slides: {
			perView: 1,
			spacing: 100,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});
	const [thumbnailRef] = useKeenSlider(
		{
			initial: 0,
			slides: {
				perView: 3,
				spacing: 10,
			},
		},
		[ThumbnailPlugin(instanceRef)]
	);

	return (
		<div className="overflow-hidden px-4 space-y-4">
			{/* Main Carousel */}

			<div ref={sliderRef} className="keen-slider h-64 sm:h-72 lg:h-96">
				{hrefArray.map((href) => (
					<div key={href} className="keen-slider__slide">
						<Image
							src={href}
							alt=""
							fill
							objectFit="contain"
							placeholder="blur"
							blurDataURL={href}
						/>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			{loaded && instanceRef.current && (
				<>
					<Arrow
						left
						onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
						disabled={currentSlide === 0}
					/>

					<Arrow
						onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
						disabled={
							currentSlide ===
							instanceRef.current.track.details.slides.length - 1
						}
					/>
				</>
			)}

			{/* Thumbnail Carousel */}
			<Separator />

			<div ref={thumbnailRef} className="keen-slider thumbnail h-24">
				{hrefArray.map((href) => (
					<div key={href} className="keen-slider__slide ">
						<Image
							src={href}
							alt=""
							fill
							objectFit="cover"
							placeholder="blur"
							blurDataURL={href}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

function ThumbnailPlugin(mainRef) {
	return (slider) => {
		function removeActive() {
			slider.slides.forEach((slide) => {
				slide.classList.remove("active");
			});
		}
		function addActive(idx) {
			slider.slides[idx].classList.add("active");
		}

		function addClickEvents() {
			slider.slides.forEach((slide, idx) => {
				slide.addEventListener("click", () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx);
				});
			});
		}

		slider.on("created", () => {
			if (!mainRef.current) return;
			addActive(slider.track.details.rel);
			addClickEvents();
			mainRef.current.on("animationStarted", (main) => {
				removeActive();
				const next = main.animator.targetIdx || 0;
				addActive(main.track.absToRel(next));
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
			});
		});
	};
}

function Arrow(props) {
	const disabled = props.disabled ? "opacity-50" : "";
	return (
		<>
			<style></style>
			<svg
				onClick={props.onClick}
				className={`transition-all dark:invert w-6 h-6 absolute top-1/3 translate-y-[-50%] cursor-pointer ${
					props.left ? "left-[10px]" : "left-auto right-[10px]"
				} ${disabled}`}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				{props.left && (
					<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
				)}
				{!props.left && (
					<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
				)}
			</svg>
		</>
	);
}
