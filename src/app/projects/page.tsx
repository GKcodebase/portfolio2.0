"use client";

import { Background, Flex, Grid, Heading, Icon, SparkleFx, Spinner } from '@/once-ui/components';
import React, { Fragment, useEffect, useState } from 'react';
import { fetchGameData, fetchGithubAndDevData } from '../api/projects';
import { Card } from '@/components/Card';
const Project: { id: number, clone_url: string, name: string, description: string, language: string }[] = []
const Articles: { id: number, url: string, name: string, description: string, title: string, tags: string }[] = []
export default function Projects({ }) {
    const [data, setData] = useState({ projects: Project, articles: Articles });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchGithubAndDevData();
                setData(result);

                // Fetch data from itch.io API route
                const response = await fetchGameData();
                console.log('Itch.io data:', response);


            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadData();
    }, []);

    return (
        <Fragment>
            <Background />
            {isLoading ? <Flex
                as="main"
                direction="column"
                justifyContent="center"
                fillWidth
                fillHeight
                alignItems="center"
                padding="l"
                gap="l"
            >
                <Spinner size="xl" />
            </Flex>
                :
                <Flex>
                    <Flex
                        as="main"
                        direction="column"
                        justifyContent="center"
                        fillWidth
                        fillHeight
                        padding="l"
                        gap="l"
                    >
                        {/* GitHub Projects Section */}
                        <Flex
                            as="section"
                            direction="column"
                            alignItems="center"
                            flex={1}
                            padding="l"
                            position="relative"
                            gap="xl"
                        >
                            <Heading
                                as="h1"
                                wrap="balance"
                                variant="display-strong-xs"
                            >
                                GitHub Projects
                            </Heading>
                            <Grid
                                border="brand-medium"
                                columns="repeat(3, minmax(250px, 1fr))"
                                gap="xl"
                                padding="l"
                                fillWidth
                            >
                                {data.projects.map((project) => (
                                    <Card
                                        key={project.id}
                                        github={true}
                                        href={project.clone_url}
                                        title={project.name}
                                        description={project.description}
                                        content={project.language}
                                    />
                                ))}
                            </Grid>
                        </Flex>

                        {/* Articles Section */}
                        <Flex
                            as="section"
                            direction="column"
                            alignItems="center"
                            flex={1}
                            padding="l"
                            gap="xl"
                            position="relative"
                        >
                            <Heading
                                as="h1"
                                wrap="balance"
                                variant="display-strong-xs"
                            >
                                Articles
                            </Heading>
                            <Grid
                                border="brand-medium"
                                columns="repeat(2, minmax(300px, 1fr))"
                                gap="xl"
                                padding="l"
                                fillWidth
                            >
                                {data.articles.map((article) => (
                                    <Card
                                        key={article.id}
                                        github={false}
                                        href={article.url}
                                        title={article.title}
                                        description={article.description}
                                        content={article.tags}
                                    />
                                ))}
                            </Grid>
                        </Flex>
                    </Flex>
                </Flex>
            }
        </Fragment>

    );
}

