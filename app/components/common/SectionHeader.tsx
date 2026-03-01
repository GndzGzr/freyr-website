const SectionHeader = ({
  titleSpanFirst,
  titleSpanSecond,
  order,
}: {
  titleSpanFirst: string;
  titleSpanSecond: string;
  order?: boolean;
}) => {
  return (
    <h2 className="text-center mb-4">
      {order ? (
        <>
          <span className="titleSpanFirst">{titleSpanFirst}</span>{"   "}
          <span className="titleSpanSecond font-serif">{titleSpanSecond}</span>
        </>
      ) : (
        <>
          <span className="titleSpanSecond font-serif">{titleSpanFirst}</span>{" "}
          <span className="titleSpanFirst">{titleSpanSecond}</span>
        </>
      )}
    </h2>
  );
};

export default SectionHeader;
