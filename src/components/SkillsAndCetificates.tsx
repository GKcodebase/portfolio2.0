// components/SkillsAndCertifications.js
import React from 'react';
import { FaJava, FaPython, FaJs, FaAws, FaDocker, FaGitAlt, FaJira, FaRProject } from 'react-icons/fa';
import { SiSpring, SiReact, SiAngular, SiKubernetes, SiJenkins, SiMongodb, SiMysql, SiPostgresql, SiApachekafka, SiApachespark, SiWalmart, SiSelenium, SiJunit5, SiCplusplus, SiNodedotjs, SiHtml5, SiCss3, SiMicrosoftazure, SiGithub, SiAmazondynamodb, SiApachejmeter, SiApachehive, SiApachehadoop, SiHibernate, SiScrumalliance, SiGrafana, SiPrometheus, SiFastapi } from 'react-icons/si';
import { skills, certifications } from '@/resource/content';
import { Flex, Grid, Heading, Text } from '@/once-ui/components';
//Components which will list all skils and certs in home pag
const SkillsAndCertifications = () => {

    const getIcon = (skill: string) => {
        switch (skill.toLowerCase()) {
            case 'java': return <FaJava />;
            case 'python': return <FaPython />;
            case 'javascript': return <FaJs />;
            case 'aws': return <FaAws />;
            case 'docker': return <FaDocker />;
            case 'git': return <FaGitAlt />;
            case 'spring boot': return <SiSpring />;
            case 'react': return <SiReact />;
            case 'angular': return <SiAngular />;
            case 'kubernetes': return <SiKubernetes />;
            case 'jenkins': return <SiJenkins />;
            case 'mongodb': return <SiMongodb />;
            case 'mysql': return <SiMysql />;
            case 'postgresql': return <SiPostgresql />;
            case 'kafka': return <SiApachekafka />;
            case 'spark': return <SiApachespark />;
            case 'walmart cloud-native platform': return <SiWalmart />;
            case 'selenium': return <SiSelenium />;
            case 'junit': return <SiCplusplus />;
            case 'c++': return <SiJunit5 />;
            case 'nodejs': return <SiNodedotjs />;
            case 'css': return <SiCss3 />;
            case 'azure': return <SiMicrosoftazure />;
            case 'html': return < SiHtml5 />;
            case 'github': return <SiGithub />;
            case 'amazon dynamodb': return <SiAmazondynamodb />;
            case 'jmeter': return <SiApachejmeter />;
            case 'hive': return <SiApachehive />;
            case 'hadoop': return <SiApachehadoop />;
            case 'jira': return <FaJira />;
            case 'r': return <FaRProject />;
            case 'hibernate': return <SiHibernate />;
            case 'scrum': return <SiScrumalliance />;
            case 'grafana': return <SiGrafana />;
            case 'promethus': return <SiPrometheus />;
            case 'fast api': return <SiFastapi />;
            case 'jira': return <FaJira />;
            case 'jira': return <FaJira />;




            default: return null;
        }
    };

    return (
        <>
            <Flex direction="column" className="container mx-auto p-4">
                <Grid
                    border="neutral-medium"
                    borderStyle="solid-1"
                    tabletColumns="1col" mobileColumns="1col"
                    gap="m"
                    padding="m"
                    neutral-weak
                    radius="l"
                >
                    <>
                        <Heading as="h3" className="text-2xl font-bold mb-4">Skills</Heading>

                        <Grid columns="repeat(3, 2fr)" tabletColumns="1col" mobileColumns="1col" gap="4">
                            {skills.map((skillCategory, index) => (
                                <Flex key={index} direction="column" className="mb-4">
                                    <Heading as="h2" className="text-xl font-semibold mb-2">{skillCategory.category}</Heading>
                                    <Flex wrap gap="2">
                                        {skillCategory.items.map((skill, skillIndex) => (
                                            <Flex key={skillIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded items-center">
                                                {getIcon(skill)}
                                                <Text className="ml-1">{skill}</Text>
                                            </Flex>
                                        ))}
                                    </Flex>
                                </Flex>
                            ))}
                        </Grid>

                    </>
                </Grid>

            </Flex>
            <Flex direction="column" className="container mx-auto p-4">
                <Grid
                    border="neutral-medium"
                    borderStyle="solid-1"
                    tabletColumns="1col" mobileColumns="1col"
                    gap="m"
                    padding="m"
                    neutral-weak
                    radius="l"
                >

                    <>
                        <Heading as="h3" className="text-2xl font-bold mb-4">Certifications</Heading>
                        <Grid columns="repeat(3, 1fr)" tabletColumns="1col" mobileColumns="1col" gap="4">
                            {certifications.map((cert, index) => (
                                <Flex key={index} direction="column" className="mb-4 p-4 border rounded shadow">
                                    <Heading as="h2" className="text-xl font-semibold">{cert.title}</Heading>
                                    <Text className="text-gray-600">{cert.issuer} - {cert.date}</Text>
                                    {cert.credentialId && <Text className="text-sm">Credential ID: {cert.credentialId}</Text>}
                                    <Text className="mt-2"><strong>Skills:</strong> {cert.skills.join(', ')}</Text>
                                </Flex>
                            ))}
                        </Grid>
                    </>
                </Grid>

            </Flex>
        </>
    );
};

export default SkillsAndCertifications;