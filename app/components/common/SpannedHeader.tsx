"use client";

import { useEffect, useState } from "react";

const chunkWords = (text: string, size: number) =>
    text.split(" ").reduce<string[][]>((acc, word, i) => {
        if (i % size === 0) acc.push([]);
        acc[acc.length - 1].push(word);
        return acc;
    }, []);

const SpannedHeader = ({spanFirst, spanSecond}: {spanFirst: string, spanSecond: string}) => {
    const [chunkSize, setChunkSize] = useState(2);

    useEffect(() => {
        const update = () => {
            setChunkSize(window.innerWidth < 480 ? 2 : window.innerWidth < 768 ? 2 : 2);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const firstChunks = chunkWords(spanFirst, chunkSize);
    const secondChunks = chunkWords(spanSecond, chunkSize);

    return (
        <h1 className="font-serif text-center px-2 md:px-4">
            <span className="spanFirst">
                {firstChunks.map((chunk, i) => (
                    <span key={i} className="block">{chunk.join(" ")}</span>
                ))}
            </span>
            <span className="spanSecond">
                {secondChunks.map((chunk, i) => (
                    <span key={i} className="block">{chunk.join(" ")}</span>
                ))}
            </span>
        </h1>
    );
}

export default SpannedHeader