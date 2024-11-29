import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

const filterData = [
    {
        filterType:"Location",
        array:["Delhi NCR", "Pune", "Hyderabad", "Gurgaon"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer", "Backend Developer", "Fullstack Developer"]
    },
    {
        filterType:"Salary",
        array:["0-40k", "1-40lpa",  "upto 1cr"]
    },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white rounded-md p-4  '>
     <div>
        <h1>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                filterData.map((data, index)=>(
                    <div>
                        <h1 className='font-bold'>{data.filterType}</h1>
                        {
                            data.array.map((item, index)=>{
                                return (<div className='flex space-x-2 items-center my-2'>
                                    <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                </div>)
                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>
     </div>
    </div>
  )
}

export default FilterCard
