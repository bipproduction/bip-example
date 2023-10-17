import { Flex, Paper, Stack, Title, UnstyledButton } from "@mantine/core"
import Link from "next/link"
import WidgetDataParam from "./_widget/data_param"
import { IconArrowBack, IconArrowLeft } from "@tabler/icons-react"

export default function Page({ searchParams }: { searchParams: { prov: string } }) {
    const list_param = ["satu", "dua", "tiga", "empat"]
    return <>
        <Stack p={"md"}>
            <Flex p={"xs"} gap={"md"} align={"center"}>
                <Link href={'/'}>
                    <IconArrowLeft size={36} />
                </Link>
                <Title>Route With Param</Title>
            </Flex>
            {list_param.map((v, k) => <Link key={k} href={`/router-search-param?prov=${v}`} >
                <UnstyledButton>
                    Coba {v}
                </UnstyledButton>
            </Link>)}
            <Paper p={"md"}>
                <WidgetDataParam />
            </Paper>
        </Stack>
    </>
}