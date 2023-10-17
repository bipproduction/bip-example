import { Button, Flex, Stack, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import WidgetTombolRealtime from "../_widget/tombol_realtime";

export default function Page() {
    return <>
        <Stack p={"md"}>
            <Flex align={"center"} gap={"md"}>
                <Link href={'/'}>
                    <IconArrowLeft size={32} />
                </Link>
                <Title>Real time</Title>
            </Flex>
            <WidgetTombolRealtime />
        </Stack>
    </>
}