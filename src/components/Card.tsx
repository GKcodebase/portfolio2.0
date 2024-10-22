"use client";

import { Button, Flex, Grid, Heading, IconButton, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import styles from './../components/Card.module.scss';

interface ProjectCardProps {
    github: boolean;
    href: string;
    title: string;
    content: string;
    description: string;
}
// Card component to show projects and articles
export const Card: React.FC<ProjectCardProps> = ({
    github,
    href,
    title,
    content,
    description
}) => {

    return (
        <Flex
            fillWidth gap="s"
            direction="column"
            className={styles.card}
        >
            <Flex
                fillWidth paddingX="l" paddingTop="xs" paddingBottom="m" gap="l">
                <Grid
                    border="neutral-medium"
                    columns="repeat(2, 1fr)"
                    tabletColumns="1col"
                    mobileColumns="1col"
                    gap="xs"
                    padding="xs"
                    radius="l"
                >
                    {title && (
                        <Flex
                            flex={5}
                            className={styles.cardleft}
                        >
                            <Heading
                                as="h3"
                                wrap="balance"
                                variant="display-strong-xs">
                                {title}
                            </Heading>
                            {github ?
                                <Flex padding="xs">
                                    <IconButton size="m" tooltip="click to see the project" icon="github" href={href} />
                                </Flex>
                                :
                                <Flex padding="xs">
                                    <IconButton size="m" tooltip="click to see the project" icon="book" href={href} />
                                </Flex>
                            }
                            <Flex padding="xs">{content}</Flex>
                        </Flex>
                    )}
                    {content && (
                        <Flex
                            flex={5}>
                            <h4>
                                {description}
                            </h4>
                        </Flex>
                    )}
                </Grid>
            </Flex>
        </Flex>
    );
};