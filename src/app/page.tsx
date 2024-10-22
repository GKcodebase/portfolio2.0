"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, Background, LetterFx, RevealFx, Avatar } from '@/once-ui/components';
import Link from 'next/link';
import { home, links, urls, about, person } from '../resource/content';
import SkillsAndCertifications from '@/components/SkillsAndCetificates';
// Landing Page - Home
export default function Home() {
	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background />
			<Flex
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="s">
					<Flex
						mobileDirection="column"
						fillWidth gap="m">
						<Flex
							position="relative"
							flex={4} gap="m" marginBottom="m"
							direction="column">

							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										speed="medium"
										trigger="instant">
										Tech Innovator And Project Guru
									</LetterFx>
								</span>
							</Heading>
							<RevealFx translateY="8" delay={0.4}>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									variant="body-default-l">
									{home.subline}
								</Text>
							</RevealFx>
							<RevealFx translateY="12" delay={0.5}>
								<Button
									data-border="rounded"
									href={"about"}
									variant="tertiary"
									suffixIcon="chevronRight"
									size="m">
									<Flex
										gap="m"
										alignItems="center">
										{about.avatar.display && (
											<Avatar
												style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
												src={person.avatar}
												size="m" />
										)}
										{about.title}
									</Flex>
								</Button>
							</RevealFx>

						</Flex>
					</Flex>
					<RevealFx speed="slow" translateY={5} delay={1.5}>
						<Grid
							radius="l"
							border="neutral-medium"
							borderStyle="solid-1"
							columns="repeat(3, 1fr)"
							tabletColumns="1col"
							mobileColumns="1col"
							fillWidth>
							{links.map((link) => (
								<Link
									target="_blank"
									style={{ padding: 'var(--responsive-space-m)' }}
									key={link.href}
									href={link.href}>
									<Flex
										fillWidth paddingY="8" gap="8"
										direction="column">
										<Flex
											fillWidth gap="12"
											alignItems="center">
											<Text
												variant="body-strong-m" onBackground="neutral-strong">
												{link.title}
											</Text>
											<Icon size="s" name="openLink" />
										</Flex>
										<Text
											variant="body-default-s" onBackground="neutral-weak">
											{link.description}
										</Text>
									</Flex>
								</Link>
							))}
						</Grid>
						<SkillsAndCertifications />
					</RevealFx>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 G.K, <Link href="https://github.com/GKcodebase/portfolio2.0?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href={urls.github.url}
						prefixIcon={urls.github.name} size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href={urls.linkedIn.url}
						prefixIcon={urls.linkedIn.name} size="s" variant="tertiary">
						LinkedIn
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
