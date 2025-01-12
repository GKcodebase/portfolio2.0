"use client";

import { Card } from '@/components/Card';
import { Background, Flex, Grid, Heading, SparkleFx, Spinner } from '@/once-ui/components';
import React, { Fragment, useEffect, useState } from 'react';
import { fetchGithubAndDevData } from '../api/projects';
const Articles: { id: number, url: string, name: string, description: string, title: string, tags: string }[] = []
// Blog page
export default function Blog() {
    const [data, setData] = useState({ articles: Articles });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchGithubAndDevData();
                setData(result);

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
                        {/* Articles/Blogs */}

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