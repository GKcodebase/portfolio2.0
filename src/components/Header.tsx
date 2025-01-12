"use client";

import { usePathname } from "next/navigation";

import { Flex, ToggleButton } from "@/once-ui/components";
import styles from '@/components/Header.module.scss';

import { routes, display } from '../resource/config';
import { person, home, about, blog, projects } from '../resource/content';

// Header to show Menu items 
export const Header = () => {
    const pathname = usePathname() ?? '';
    return (
        <Flex style={{ height: 'fit-content' }}
            className={styles.position}
            margin="l"
            as="header"
            zIndex={9}
            fillWidth padding="s"
            mobileDirection="row"
            justifyContent="space-evenly">
            <Flex
                hide="s"
                paddingLeft="12"
                alignItems="left"
                textVariant="body-default-s">
                {display.location && (
                    <>{person.location}</>
                )}
            </Flex>
            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                padding="4"
                justifyContent="center">
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    {routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href={`/`}
                            selected={pathname === "/"}>
                            <Flex paddingX="2" hide="s">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    {routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href={"/about"}
                            selected={pathname === "/about"}>
                            <Flex paddingX="2" hide="s">{about.label}</Flex>
                        </ToggleButton>
                    )}
                    {routes['/projects'] && (
                        <ToggleButton
                            prefixIcon="nut"
                            href={"/projects"}
                            selected={pathname.startsWith('/projects')}>
                            <Flex paddingX="2" hide="s">{projects.label}</Flex>
                        </ToggleButton>
                    )}
                    {routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href={"/blog"}
                            selected={pathname.startsWith('/blog')}>
                            <Flex paddingX="2" hide="s">{blog.label}</Flex>
                        </ToggleButton>
                    )}
                </Flex>
            </Flex>
            <Flex>

            </Flex>
        </Flex>
    )
}