"use client";

import { Button, Flex, Heading, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import styles from './../components/Card.module.scss';

interface ProjectCardProps {
    github:boolean;
    href: string;
    title: string;
    content: string;
    description: string;
}

export const Card: React.FC<ProjectCardProps> = ({
    github,
    href,
    title,
    content,
    description
}) => {

    return (
        <Flex
            fillWidth gap="xl"
            direction="column"
            className={styles.card}
        >
            <Flex
                mobileDirection="column"
                fillWidth paddingX="l" paddingTop="xs" paddingBottom="m" gap="l">
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
                        {github?
                        <>
                             <Button
                            href={href}
                            prefixIcon="github" size="s" variant="tertiary" />
                        </>
                        :
                        <>
                             <Button
                            href={href}
                            prefixIcon="book" size="s" variant="tertiary" />
                        </>
                    
                        }
                                                <p>{content}</p>

                   
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
            </Flex>
        </Flex>
    );
};