import { PencilIcon, TrashIcon } from '@primer/octicons-react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  Label,
  Pagehead
} from '@primer/react';
import React from 'react';
import DashboardBaseLayout from '../../components/dashboard/DashboardBaseLayout';

function Jobs() {
  return (
    <DashboardBaseLayout
      selectedDashboadTab={2}
      className="p-8">
      <Box
        display="flex"
        justifyContent="flex-end"
        className="mr-2">
        <Button
          variant="outline"
          className="mr-2"
          size="large">
          Add Department
        </Button>
        <Button
          variant="primary"
          size="large">
          Add Opening
        </Button>
      </Box>
      <Pagehead className="px-2">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center">
          <Heading>Engineering</Heading>
          <Button>Interview Process</Button>
        </Box>
      </Pagehead>
      <table className="table-auto w-full ">
        <thead className=" bg-orange-100">
          <tr>
            <th className="rounded-l-lg p-3">Position</th>
            <th>Applications</th>
            <th className="p-3">Status</th>
            <th className="p-3">Published On</th>
            <th className="rounded-r-lg p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue">
            <td className="p-3 border-b hover:bg-slate-50">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="text-center  border-b">1961</td>
            <td className="text-center border-b">
              <Label
                size="large"
                variant="success">
                Active
              </Label>
            </td>
            <td className="text-center border-b">22/05/2008 </td>
            <td className="text-center border-b flex justify-center">
              <IconButton
                icon={PencilIcon}
                variant="outline"
                className="m-2"></IconButton>
              <IconButton
                icon={TrashIcon}
                variant="danger"
                className="m-2"></IconButton>
            </td>
          </tr>

          <tr className="bg-blue">
            <td className="p-3 border-b hover:bg-slate-50">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="text-center  border-b">1961</td>
            <td className="text-center border-b">
              <Label
                size="large"
                variant="success">
                Active
              </Label>
            </td>
            <td className="text-center border-b">22/05/2008 </td>
            <td className="text-center border-b text-green-700">+61</td>
          </tr>
          <tr className="bg-blue">
            <td className="p-3 border-b hover:bg-slate-50">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="text-center  border-b">1961</td>
            <td className="text-center border-b">
              <Label
                size="large"
                variant="success">
                Active
              </Label>
            </td>
            <td className="text-center border-b">22/05/2008 </td>
            <td className="text-center border-b text-green-700">+61</td>
          </tr>
        </tbody>
      </table>
    </DashboardBaseLayout>
  );
}

export default Jobs;
