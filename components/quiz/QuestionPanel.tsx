import Image from 'next/image';
import hasura from '../../assets/hasura.svg';

type QuestionPanelProps = {
  q_num: number;
  question: string;
  option_list: string[];
  selectedOpt: number;
  setresult: any;
};

function QuestionPanel({
  q_num,
  question,
  option_list,
  selectedOpt,
  setresult
}: QuestionPanelProps) {
  const selectopt = selectedOpt;
  const selectedclasses =
    'z-50 text-left border-1 border-green-500 ring-2 ring-offset-4 text-black bg-green-500';

  return (
    <>
      <div className=" absolute bottom-0 left-0">
        <Image
          alt="hasura"
          className="opacity-10"
          src={hasura}
          height={500}
          width={500}
        />
      </div>
      <div className="flex max-w-7xl">
        <div className="text-3xl font-bold px-48 text-center">
          <span className="text-3xl font-bold mr-8">{q_num}. </span>
          {question}
        </div>
      </div>
      {/*  */}
      <div className="max-w-3xl grid grid-cols-1 grid-rows-4 gap-1 w-full p-8">
        {option_list.map((opt: string, id: number) => (
          <button
            key={id}
            value={id + 1}
            onClick={(e: any) => {
              const opt: number = parseInt(
                (e.target as HTMLInputElement).value
              );
              setresult((prev: number[]) => {
                const newres = [...prev];
                newres[q_num - 1] = opt;
                return newres;
              });
            }}
            className={`text-left hover:border-1 hover:border-green-500 hover:ring-2 hover:ring-offset-4 rounded-lg cursor-pointer px-4 p-1 text-gray-800 hover:text-black font-bold text-lg hover:bg-green-500 opacity-70 ${
              selectedOpt == id + 1 ? selectedclasses : ''
            }`}>
            <input
              type="radio"
              value={id + 1}
              className="mr-4"
              checked={selectedOpt == -1 ? false : selectedOpt == id + 1}
            />
            <span>{opt}</span>
          </button>
        ))}
      </div>
    </>
  );
}

export default QuestionPanel;
