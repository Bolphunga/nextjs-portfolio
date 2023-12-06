const author = "Ahmed Djebnoune";
const description =
	"Front-End developer from Algeria, who loves to develop beautiful websites, single page applications, or code from scratch using React and Next.js";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://ahmed-djebnoune.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Ahmed Djebnoune",
		"Ahmed Djebnoune - Front-End developer",
		"Frontend developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "blob:https://vercel.com/6d63be40-8f10-4455-bcd8-ef1fefcc6d81",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "blob:https://vercel.com/6d63be40-8f10-4455-bcd8-ef1fefcc6d81",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
