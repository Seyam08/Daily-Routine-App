import { Badge, Table } from "keep-react";

export default function TableComponent() {
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Tasks</p>
            <Badge size="xs" colorType="light" color="gray">
              100 Member
            </Badge>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[290px]">
          <p className="text-body-5 font-medium text-metal-400">Tasks name</p>
        </Table.HeadCell>
        <Table.HeadCell>Start From </Table.HeadCell>
        <Table.HeadCell>End to</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <Table.Row className="bg-white">
          <Table.Cell>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                      Lets do something
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Table.Cell>
          <Table.Cell>
            <p className="text-cyan-600 font-bold ">6:00pm</p>
          </Table.Cell>
          <Table.Cell>
            <p className="text-cyan-600 font-bold">6:00pm</p>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
