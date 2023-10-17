'use client'
import { useShallowEffect } from "@mantine/hooks"
import io from 'socket.io-client'
import { toast } from 'react-toastify'
const socket = io("https://io.wibudev.com", {
    transports: ["polling"]
})

export default function WidgetRealtime() {
    useShallowEffect(() => {
        socket.on("io", (data) => {
            if (data && data.id && data.id === "example") {
                toast.success(data.data)
            }
        })
    }, [])
    return <></>
}