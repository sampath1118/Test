import React from 'react'
import DataTable from 'react-data-table-component';

function datatable() {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const columns = [
        {
            name: 'Sno',
            selector: row => row.sno,
        },
        {
            name: 'Pool Name',
            selector: row => row.poolname,
        },
        {
            name: 'Pool ID',
            selector: row => row.poolid,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
    ];
    
    const data = [
        {
            id: 1,
            sno:1,
            poolname: 'Test',
            poolid: '#254f5f1252',
            status:'yet to draw'
        },
        {
            id: 2,
            sno:2,
            poolname: 'Handtohand',
            poolid: '#2F5441DF1',
            status:'yet to draw'
        },

        {
            id: 3,
            sno:3,
            poolname: 'Handtohand',
            poolid: '#254F4D54F21F',
            status:'yet to draw'
        },
        {
            id: 4,
            sno:4,
            poolname: 'Handtohand',
            poolid: '#254F4D54F21F',
            status:'yet to draw'
        },

        {
            id: 5,
            sno:5,
            poolname: 'Handtohand',
            poolid: '#254F4D54F21F',
            status:'yet to draw'
        },

        {
            id: 6,
            sno:6,
            poolname: 'Handtohand',
            poolid: '#254F4D54F21F',
            status:'yet to draw'
        },

        {
            id: 7,
            sno:7,
            poolname: 'Handtohand',
            poolid: '#254F4D54F21F',
            status:'yet to draw'
        },
    ]
  return (
    <div>
     <DataTable
        pagination
            columns={columns}
            data={data}
            selectableRows
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    </div>
  )
}

export default datatable

