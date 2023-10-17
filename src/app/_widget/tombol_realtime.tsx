'use client'

import { Button, Group } from "@mantine/core"

export default function WidgetTombolRealtime() {

    return <>
        <Group>
            <Button onClick={(() => {
                fetch('https://io.wibudev.com/io', {
                    method: "POST",
                    body: JSON.stringify({
                        id: "example",
                        path: "/",
                        data: "ini contoh data realtime"
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(v => v.json()).then(console.log)
            })}>Text</Button>
        </Group>
    </>
}