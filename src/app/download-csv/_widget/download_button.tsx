'use client'
import { Button } from "@mantine/core";
import papa from 'papaparse'

export default function DownloadButton() {
    return <>
        <Button onClick={() => {
            const jsonData = [
                {
                    "id": 1,
                    "name": "malik"
                },
                {
                    "id": 2,
                    "name": "amal"
                },
                {
                    "id": 3,
                    "name": "lukman"
                }
            ];

            const jsonDataString = papa.unparse(jsonData);
            const jsonDataUri = "data:text/csv;charset=utf-8," + encodeURIComponent(jsonDataString);

            const downloadLink = document.createElement("a");
            downloadLink.href = jsonDataUri;
            downloadLink.download = "example.csv";
            downloadLink.click();
        }}>download</Button>
    </>
}