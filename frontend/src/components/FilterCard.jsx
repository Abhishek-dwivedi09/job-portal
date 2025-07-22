// import { Label } from "./ui/label";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

// import React from "react";

// const filterData = [
//   {
//     filterType: "Location",
//     array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
//   },
//   {
//     filterType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//   },
//   {
//     filterType: "Salary",
//     array: ["0-40k", "42-1lakh", "1lakh to 5 lakh"],
//   },
// ];

// function FilterCard() {
//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <h1 className="font-bold text-lg">Filter Jobs</h1>
//       <hr className="mt-3" />
//       <RadioGroup>
//         {filterData.map((data, index) => (
//           <div>
//             <h1 className="font-bold text-lg ">{data.filterType}</h1>
//             {data.array.map((item, index) => {
//               return (
//                 <div className="flex item-center space-x-2 my-2">
//                   {/* <RadioGroupItem value={item}/> */}

//                   <RadioGroupItem
//                     value={item}
//                     id={`${data.filterType}-${item}`}
//                     className="h-4 w-4 rounded-full border border-gray-400  data-[state=checked]:bg-black"
//                   />

//                   <Label>{item}</Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// }

// export default FilterCard;


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5 lakh"],
  },
];

function FilterCard() {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, i) => (
        <div key={i} className="mt-4">
          <h2 className="font-semibold text-md">{data.filterType}</h2>

          <RadioGroup className="mt-2 space-y-2">
            {data.array.map((item, j) => (
              <div
                key={`${data.filterType}-${j}`}
                className="flex items-center space-x-2"
              >
                <RadioGroupItem
                  value={item}
                  id={`${data.filterType}-${item}`}
                  className="h-4 w-4 rounded-full border border-gray-400 data-[state=checked]:bg-black"
                />
                <Label htmlFor={`${data.filterType}-${item}`}>{item}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
}

export default FilterCard;
