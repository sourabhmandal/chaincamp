function TopScoreBoard({ data }: any) {
  console.log(data);
  return (
    <table className="table-auto w-full">
      <thead className=" bg-orange-100">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Correct</th>
          <th className="p-3">Wrong</th>
          <th className="p-3">Passed</th>
          <th className="p-3 rounded-r-lg">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d: any, idx: number) => {
          return (
            <tr
              key={idx}
              className="rounded-lg border-b hover:bg-slate-100">
              <td className="p-3 border-b ">{d.user_email}</td>
              <td className="text-center text-green-500 border-b">
                {d.correct}
              </td>
              <td className="text-center text-red-500 border-b">{d.wrong}</td>
              <td className="text-center text-yellow-500 border-b">
                {d.unattempted}
              </td>
              <td className="text-center text-green-700 border-b">{d.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TopScoreBoard;
