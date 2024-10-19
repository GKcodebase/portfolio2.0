import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniUser,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
} from "react-icons/hi2";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin
} from "react-icons/fa6";

import {
	PiGridFourDuotone,
	PiHouseDuotone,
	PiBookBookmarkDuotone,
	PiMailboxDuotone
} from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	person: HiMiniUser,
	close: HiMiniXMark,
	grid: PiGridFourDuotone,
	home: PiHouseDuotone,
	book: PiBookBookmarkDuotone,
	openLink: HiOutlineLink,
	discord: FaDiscord,
	github: FaGithub,
	linkedIn: FaLinkedin,
	email: PiMailboxDuotone
};