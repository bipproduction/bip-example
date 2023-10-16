import { Flex, Group, Stack, Title } from "@mantine/core"
import DownloadButton from "./_widget/download_button"
import Link from "next/link"
import { IconArrowAutofitLeft, IconArrowLeft } from "@tabler/icons-react"

export default async function Page() {


    return <Stack p={"md"}>
        <Flex align={"center"} gap={"md"} >
            <Link href={'/'}>
                <IconArrowLeft size={32} />
            </Link>
            <Title>Download Example</Title>
        </Flex>
        <Group>
            <DownloadButton />
        </Group>
    </Stack>
}