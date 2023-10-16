import { CloseButton, Flex, Paper, Stack, Title } from "@mantine/core";
import { DragBox } from "./_widget/drag_box";
import Link from "next/link";
import { IconArrowBack, IconArrowLeft, IconArrowLeftCircle, IconBackhoe } from '@tabler/icons-react'

export default async function Page() {
    return <>
        <Stack p={"md"}>
            <Flex  gap={"md"} align={"center"} >
                <Link href={'/'}>
                    <IconArrowLeft size={32} />
                </Link>
                <Title>CSV FILE TO JSON</Title>
            </Flex>
            <Paper p={"md"} bg={"gray.1"}>
                <DragBox />
            </Paper>
        </Stack>
    </>
}