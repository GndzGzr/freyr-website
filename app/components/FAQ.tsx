type FAQProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

const FAQ = ({ question, answer, isOpen, onToggle }: FAQProps) => {
  return (
    <div
      className="service-card relative flex flex-col justify-center items-start w-full gap-4 p-8 cursor-pointer select-none"
      onClick={onToggle}
    >
      <div className="flex justify-between items-center w-full">
        <p className="question-q">
          <span className="q-mark">Q: </span> {question}
        </p>
        <span className="text-2xl font-light text-primary ml-4 shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <p className="answer-a">
          <span className="a-mark">A: </span>
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQ;
