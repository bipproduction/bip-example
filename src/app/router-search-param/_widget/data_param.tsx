'use client'
import { useSearchParams } from "next/navigation";

export default function WidgetDataParam() {
    const par = useSearchParams()

    return <>
        {par.get('prov')}
    </>
}