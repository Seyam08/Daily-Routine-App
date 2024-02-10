import { Badge, Table } from "keep-react";

export default function Task({ tasks }) {
  console.log(tasks);
  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <Badge size="sm" colorType="light" color="gray">
              {tasks.length}
            </Badge>
            <p className="text-body-1 font-semibold text-metal-600">Tasks</p>
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
        {tasks.map((task) => (
          <Table.Row className="bg-white" key={task.id}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {task.Task}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-cyan-600 font-bold ">{task.StartTime}</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-cyan-600 font-bold">{task.EndTime}</p>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
