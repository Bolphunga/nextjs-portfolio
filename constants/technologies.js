import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiSqllite } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { SiJest, SiGooglebigquery } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { PiFileSql } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { RiFlutterFill, RiSupabaseLine } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Back-end",
		items: [
			{ name: "Firebase", icon: <RiFlutterFill size={32} /> },
			{ name: "Supabase", icon: <RiSupabaseLine size={32} /> },
			{ name: "SQL", icon: <PiFileSql size={32} /> },
			{ name: "MySQL", icon: <GrMysql size={32} /> },
			{ name: "PostgreSQL", icon: <BiLogoPostgresql size={32} /> },
			{ name: "BigQuery", icon: <SiGooglebigquery size={32} /> },
			{ name: "SQLite", icon: <DiSqllite size={32} /> },
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			// { name: "Zeplin", icon: <ZeplinIcon width={36} /> },
			// { name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			// { name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
			// { name: "Jira", icon: <JiraIcon width={32} /> },
			// { name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "Jest", icon: <SiJest size={32} /> },
			// { name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];
