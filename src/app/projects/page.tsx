"use client";

import { Background, Flex, Grid, Heading, Spinner } from '@/once-ui/components';
import React, { Fragment, useEffect, useState } from 'react';
import { fetchGithubAndDevData } from '../api/projects';
import { Card } from '@/components/Card';
const Project: { id: number, clone_url: string, name: string, description: string, language: string }[] = []
export default function Projects({ }) {
    const [projects, setProjects] = useState(Project);
    const [isLoading, setIsLoading] = useState(true);
    const showList = ["2DShooter", "Angular-Components-and-projects", "AWS-Example-Snippets", "datacollector", "Design", "devika", "DSA", "EduAssistant", "Java", "Machine_Learning", "NLP-application-in-indian-Judiciary", "portfolio2.0", "Prometheus-and-grafana", "SolarSystemSimulator", "Top100JAVA"];

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchGithubAndDevData();
                const filteredProjects = result.projects.filter((project: { name: { toString: () => string; }; }) =>
                    showList.includes(project.name.toString()) // Convert project.id to string for comparison
                );
                setProjects(filteredProjects);
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
                tabletDirection="row"
                mobileDirection="row"
                alignItems="center"
                padding="l"
                gap="l"
            >
                <Spinner size="xl" />
            </Flex>
                :
                <Flex style={{ display: "inline-grid" }}>
                    <Flex
                        as="main"
                        direction="column"
                        justifyContent="center"
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
                                columns="repeat(3, 1fr)"
                                tabletColumns="2col"
                                mobileColumns="1col"
                                gap="l"
                                padding="l"
                            >
                                {projects.map((project) => (
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

                    </Flex>
                </Flex>
            }
        </Fragment>

    );
}

