"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
						Hello there! My name is Ahmed, but you can call me Aymen. I embarked on my professional journey with a Bachelor&apos;s degree in electrical engineering in 2019. However, as the pandemic reshaped the professional landscape, I found myself drawn to the dynamic world of IT.
						</p>
						<p>
						My exploration led me to the captivating realm of data analysis, where I honed my skills in manipulating databases using SQL. The intricacies of this field fascinated me, prompting me to delve deeper on my own terms. This passion eventually led me to the Re:Coded Front-end BootCamp, an immersive experience that equipped me with the skills to craft intuitive and interactive web applications using React and Next.js.
						</p>
						<p>
						Now, armed with a burning desire to elevate my craft, I am eager to explore the depths of backend development. My journey so far has been a testament to my adaptability and resilience in the face of change. I am not just a tech enthusiast; I am on a mission to create better websites, pushing the boundaries of what&apos;s possible in the digital landscape.
						</p>
						<p className="my-3.5">
							Join me on this exciting journey as I continue to evolve, innovate, and bring my unique perspective to the ever-evolving world of web development. Let&apos;s create something extraordinary together!
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
