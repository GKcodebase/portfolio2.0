import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex } from '@/once-ui/components'
import classNames from 'classnames';
import { Source_Code_Pro } from 'next/font/google';
import { Header } from "@/components/Header";
import { Space_Grotesk } from 'next/font/google';
import { Roboto_Slab } from 'next/font/google';
import { Arimo } from 'next/font/google';

/* Configuring parent layout which will repeat in all pages */
const secondary = Roboto_Slab({
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'swap'
});

const tertiary = Arimo({
	variable: '--font-tertiary',
	subsets: ['latin'],
	display: 'swap'
});

const primary = Space_Grotesk({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap'
});

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
		// Configure here to update global theme
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-border="playful"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="translucent"
			data-transition="micro"
			data-brand="orange"
			data-accent="moss"
			data-neutral="custom"
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
						minHeight="16"
						margin="m"
					>
						<Header />

					</Flex>
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}