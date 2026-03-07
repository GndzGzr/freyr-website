const chunkWords = (text: string, size: number) =>
    text.split(" ").reduce<string[][]>((acc, word, i) => {
        if (i % size === 0) acc.push([]);
        acc[acc.length - 1].push(word);
        return acc;
    }, []);

const SpannedHeader = ({ spanFirst, spanSecond }: { spanFirst: string, spanSecond: string }) => {
    const firstChunks = chunkWords(spanFirst, 2);
    const secondChunks = chunkWords(spanSecond, 2);

    return (
        <h1 className="font-serif text-center px-1 md:px-4">
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