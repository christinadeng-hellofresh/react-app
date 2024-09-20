import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Card from "../../components/Card";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card className="opacity-80" onClick={() => setShowAnswer((prev) => !prev)}>
      <div className="flex justify-between items-start gap-8">
        <p className="font-semibold text-base">{faq.question}</p>
        <button className="text-2xl">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="mt-4 italic font-light">{faq.answer}</p>}
    </Card>
  );
};

export default FAQ;
