import { useMemo } from 'react';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTable } from 'react-table';
import sampleData from './sampleData';

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const { getTableProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data
	});

	// Render the UI for your table
	return (
		<MaUTable {...getTableProps()}>
			<TableHead>
				{headerGroups.map(headerGroup => (
					<TableRow {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
						))}
					</TableRow>
				))}
			</TableHead>
			<TableBody>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<TableRow {...row.getRowProps()}>
							{row.cells.map(cell => {
								return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
							})}
						</TableRow>
					);
				})}
			</TableBody>
		</MaUTable>
	);
}

function App() {
	const columns = useMemo(
		() => [
			{
				Header: 'Name',
				columns: [
					{
						Header: 'First Name',
						accessor: 'firstName'
					},
					{
						Header: 'Last Name',
						accessor: 'lastName'
					}
				]
			},
			{
				Header: 'Info',
				columns: [
					{
						Header: 'Age',
						accessor: 'age'
					},
					{
						Header: 'Visits',
						accessor: 'visits'
					},
					{
						Header: 'Status',
						accessor: 'status'
					},
					{
						Header: 'Profile Progress',
						accessor: 'progress'
					}
				]
			}
		],
		[]
	);

	const data = useMemo(() => sampleData, []);

	return <Table columns={columns} data={data} />;
}

export default App;
