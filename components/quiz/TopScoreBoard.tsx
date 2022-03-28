import React from 'react';

function TopScoreBoard() {
  return (
    <table className="table-auto w-2/3 mt-16">
      <thead className=" bg-orange-100">
        <tr>
          <th className="rounded-l-lg p-3">Position</th>
          <th className="p-3">Name</th>
          <th className="p-3 rounded-r-lg">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr className="rounded-lg border-b hover:bg-slate-100">
          <td className="text-center ">1</td>
          <td className="p-3 border-b ">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="text-center  border-b">33</td>
        </tr>
        <tr className="rounded-lg border-b hover:bg-slate-100">
          <td className="text-center ">1</td>
          <td className="p-3 border-b ">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="text-center  border-b">33</td>
        </tr>
        <tr className="rounded-lg border-b hover:bg-slate-100">
          <td className="text-center ">1</td>
          <td className="p-3 border-b ">
            The Sliding Mr. Bones (Next Stop, Pottersville)
          </td>
          <td className="text-center  border-b">33</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TopScoreBoard;
