"use client";

import { Background, Flex, Heading, SparkleFx } from '@/once-ui/components';
import React from 'react';
// Blog page
export default function Blog() {
    return (
        <Flex
        as="main"
        direction="column"
        justifyContent="center"
        fillWidth
        fillHeight
        alignItems="center" 
        padding="l"
        gap="l"
        >
            <Background />
            <Heading>
                <SparkleFx
                    speed="medium"
                    count={50}
                    trigger
                >
                    Under Development ........!!!!!! Coimg Soon ....!!!
                </SparkleFx>
            </Heading>
        </Flex>
    );
}
