import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { Flex, Stack, Text, Title } from '@mantine/core'

const list_page = [
  "upload-csv", 
  "download-csv", 
  "router-search-param", 
  "realtime-notif",
  "tmp-upload"
]

export default function Home() {
  return (
    <>
      <Stack p={"md"}>
        <Title>Content</Title>
        {list_page.map((v, k) => <Flex key={k} gap={"md"}>
          <Text>{k + 1}</Text>
          <Link key={k} href={`/${v}`}>{_.startCase(v)}</Link>
        </Flex>)}
      </Stack>
    </>
  )
}
