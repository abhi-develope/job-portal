import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const AplliedTableJobs = () => {
  return (
    <div className='p-4'>
      <Table>
        <TableCaption>List of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className='text-right'>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2].map((item, index)=>(
                    <TableRow key={index}>
                        <TableCell>17-07-2024</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className='text-right'><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AplliedTableJobs
