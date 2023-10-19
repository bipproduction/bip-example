'use client'
import { Group, Image, Stack, Text, rem } from "@mantine/core"
import { Dropzone } from "@mantine/dropzone"
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react"
import { useState } from "react"
import toast from "react-hot-toast"

export default function WidgetTmpUploadBox(props: any) {
    const [img, setIMG] = useState<any | null>()
    return <>
        <Stack p={"md"}>
            <Dropzone
                style={{
                    border: "1px dashed"
                }}
                onDrop={async (files: any[]) => {
                    const buffer = URL.createObjectURL(new Blob([new Uint8Array(await files[0].arrayBuffer())]))
                    setIMG(buffer)
                    // const csv_file = Buffer.from(await files[0].arrayBuffer()).toString()
                    // const { data } = papa.parse(csv_file, { header: true, })
                    // setJson(data as any)
                }}
                onReject={(files: any) => {
                    toast.success("file tidak didukung, atau terlalu besar")

                }}
                maxSize={3 * 1024 ** 2}
                accept={['image/png']}
                {...props}
            >
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <IconUpload
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconPhoto
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                            stroke={1.5}
                        />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                    </div>
                </Group>
            </Dropzone>
            {/* {json && <Stack bg={"dark"} c={"white"} p={"md"}>
                <Title order={3}>Result</Title>
                <pre>
                    {JSON.stringify(json, null, 2)}
                </pre>
            </Stack>} */}
            {img && <Image src={img} alt="" />}
        </Stack>
    </>
}