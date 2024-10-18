import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';

type FontConfig = {
    variable: string;
};

import { Space_Grotesk } from 'next/font/google';
import {Header} from "@/components/Header";

const primary = Inter({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const tertiary = Space_Grotesk({
    variable: '--font-tertiary',
    subsets: ['latin'],
    display: 'swap'
});



/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-brand="red"
			data-accent="orange"
			data-neutral="sand"
			data-border="playful"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="translucent"
			data-transition="micro"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable,
				'root')}>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Flex
					flex={1} direction="column">
				<Flex
					position="relative"
					minHeight="16">
					<Header/>

				</Flex>
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}