"use client";

import About from '@/components/about';
import { Avatar, Background, Button, Flex, Heading, Icon, RevealFx, SmartImage, Tag, Text } from '@/once-ui/components';
import { person, social, about, structure } from '@/resource/content';
import { baseURL } from '@/resource/config';
import React from 'react';
import styles from '../../components/about.module.scss';
import SkillsAndCertifications from '@/components/SkillsAndCetificates';

// About page 
export default function AboutPage(
    { }
) {
    return (
        <React.Fragment>
            <Background />
            <Flex
                direction="column"
                justifyContent="center"
                fillWidth
                padding="l"
                margin="l"
                position="relative"
            >
                {/* Script to configure appendix inline navigation */}
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: person.name,
                            jobTitle: person.role,
                            description: about.intro.description,
                            url: `https://${baseURL}/about`,
                            image: `${baseURL}/images/${person.avatar}`,
                            sameAs: social
                                .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                                .map((item) => item.link),
                            worksFor: {
                                '@type': 'Organization',
                                name: about.work.experiences[0].company || ''
                            },
                        }),
                    }}
                />
                {about.tableOfContent.display && (
                    <Flex
                        style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                        position="fixed"
                        paddingLeft="24" gap="32"
                        direction="column" hide="s">
                        <About
                            structure={structure}
                            about={about} />
                    </Flex>
                )}
                <Flex
                    fillWidth
                    padding="xl"
                    mobileDirection="column" justifyContent="center">
                    <RevealFx speed="fast" translateY={5} delay={0.1}>
                        {about.avatar.display && (
                            <Flex
                                minWidth="xs" paddingX="l" paddingBottom="xl" gap="m"
                                direction="column" alignItems="center"
                            >
                                <Avatar
                                    src={person.avatar}
                                    size="xl" />
                                <Flex
                                    gap="8"
                                    alignItems="center">
                                    <Icon
                                        onBackground="accent-weak"
                                        name="globe" />
                                    {person.location}
                                </Flex>
                                {person.languages.length > 0 && (
                                    <Flex
                                        wrap
                                        gap="8">
                                        {person.languages.map((language, index) => (
                                            <Tag
                                                key={index}
                                                size="l">
                                                {language}
                                            </Tag>
                                        ))}
                                    </Flex>
                                )}
                            </Flex>
                        )}
                    </RevealFx>
                    <RevealFx speed="fast" translateY={12} delay={0.05}>
                        <Flex
                            className={styles.blockAlign}
                            fillWidth flex={9} maxWidth="l" direction="column"
                            margin='m'>
                            <Flex
                                id={about.intro.title}
                                fillWidth minHeight="160"
                                direction="column" justifyContent="center"
                                marginBottom="32">

                                <Heading
                                    className={styles.textAlign}
                                    variant="display-strong-xl">
                                    {person.name}
                                </Heading>
                                <Text
                                    className={styles.textAlign}
                                    variant="display-default-xs"
                                    onBackground="neutral-weak">
                                    {person.role}
                                </Text>
                                {social.length > 0 && (
                                    <Flex
                                        className={styles.blockAlign}
                                        paddingTop="20" paddingBottom="8" gap="8" wrap>
                                        {social.map((item) => (
                                            item.link && (
                                                <Button
                                                    key={item.name}
                                                    href={item.link}
                                                    prefixIcon={item.icon}
                                                    label={item.name}
                                                    size="s"
                                                    variant="tertiary" />
                                            )
                                        ))}
                                    </Flex>
                                )}
                            </Flex>

                            {about.intro.display && (
                                <Flex
                                    direction="column"
                                    textVariant="body-default-l"
                                    fillWidth gap="m" marginBottom="xl">
                                    {about.intro.description}
                                </Flex>
                            )}
                            {about.education.display && (
                                <>
                                    <Heading
                                        as="h2"
                                        id={about.education.title}
                                        variant="display-strong-s"
                                        marginBottom="m">
                                        {about.education.title}
                                    </Heading>
                                    <Flex
                                        direction="column"
                                        fillWidth gap="l" marginBottom="40">
                                        {about.education.institutions.map((institution, index) => (
                                            <Flex
                                                key={`${institution.name}-${index}`}
                                                fillWidth gap="4"
                                                direction="column">
                                                <Text
                                                    id={institution.name}
                                                    variant="heading-strong-l">
                                                    {institution.name}
                                                </Text>
                                                <Text
                                                    variant="heading-default-xs"
                                                    onBackground="neutral-weak">
                                                    {institution.description}
                                                </Text>
                                                <Text
                                                    variant="heading-default-xs"
                                                    onBackground="neutral-weak">
                                                    {institution.timeframe}
                                                </Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </>
                            )}

                            {about.work.display && (
                                <>
                                    <Heading
                                        as="h2"
                                        id={about.work.title}
                                        variant="display-strong-s"
                                        marginBottom="m">
                                        {about.work.title}
                                    </Heading>
                                    <Flex
                                        direction="column"
                                        fillWidth gap="l" marginBottom="40">
                                        {about.work.experiences.map((experience, index) => (
                                            <Flex
                                                key={`${experience.company}-${experience.role}-${index}`}
                                                fillWidth
                                                direction="column">
                                                <Flex
                                                    fillWidth
                                                    justifyContent="space-between"
                                                    alignItems="flex-end"
                                                    marginBottom="4">
                                                    <Text
                                                        id={experience.company}
                                                        variant="heading-strong-l">
                                                        {experience.company}
                                                    </Text>
                                                    <Text
                                                        variant="heading-default-xs"
                                                        onBackground="neutral-weak">
                                                        {experience.timeframe}
                                                    </Text>
                                                </Flex>
                                                <Text
                                                    variant="body-default-s"
                                                    onBackground="brand-weak"
                                                >
                                                    {experience.role}
                                                </Text>
                                                <Text
                                                    variant="body-default-s"
                                                    onBackground="brand-weak"
                                                    marginBottom="m">
                                                    {experience.location}
                                                </Text>
                                                <Flex
                                                    as="ul"
                                                    direction="column" gap="16">
                                                    {experience.achievements.map((achievement: any, index: any) => (
                                                        <Text
                                                            as="li"
                                                            variant="body-default-m"
                                                            key={`${experience.company}-${index}`}>
                                                            {achievement}
                                                        </Text>
                                                    ))}
                                                </Flex>
                                                {experience.images.length > 0 && (
                                                    <Flex
                                                        fillWidth paddingTop="m" paddingLeft="xl"
                                                        wrap>
                                                        {experience.images.map((image, index) => (
                                                            <Flex
                                                                key={index}
                                                                border="neutral-medium"
                                                                borderStyle="solid-1"
                                                                radius="m"
                                                                minWidth={image.width} height={image.height}>
                                                                <SmartImage
                                                                    radius="l"
                                                                    sizes={image.width.toString()}
                                                                    alt={image.alt}
                                                                    src={image.src} />
                                                            </Flex>
                                                        ))}
                                                    </Flex>
                                                )}
                                            </Flex>
                                        ))}
                                    </Flex>
                                </>
                            )}
                        </Flex>
                        <Flex>
                            <Heading
                                as="h2"
                                id={about.skills.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.skills.title}
                            </Heading>
                        </Flex>
                        <SkillsAndCertifications />
                    </RevealFx>
                </Flex>
            </Flex>
        </React.Fragment>

    );
}
