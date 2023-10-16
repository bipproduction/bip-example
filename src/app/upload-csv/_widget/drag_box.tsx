'use client'
import { Button, Group, Stack, Text, Title, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import toast from 'react-hot-toast'
import papa from 'papaparse'
import { useState } from 'react';

export function DragBox(props: Partial<DropzoneProps>) {
    const [json, setJson] = useState()
    return (
        <>
            <Stack p={"md"}>
                <Dropzone
                    style={{
                        border: "1px dashed"
                    }}
                    onDrop={async (files: any) => {
                        const csv_file = Buffer.from(await files[0].arrayBuffer()).toString()
                        const { data } = papa.parse(csv_file, { header: true, })
                        setJson(data as any)
                    }}
                    onReject={(files: any) => {
                        toast.success("success")

                    }}
                    maxSize={3 * 1024 ** 2}
                    accept={['text/csv']}
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
                {json && <Stack bg={"dark"} c={"white"} p={"md"}>
                    <Title order={3}>Result</Title>
                    <pre>
                        {JSON.stringify(json, null, 2)}
                    </pre>
                </Stack>}
            </Stack>
        </>
    );
}