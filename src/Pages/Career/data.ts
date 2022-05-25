const listedJobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: true,
    featured: true,
    position: "Assistance FM",
    level: "Experience",
    contract: "Full Time",
    created: "2021-11-23T08:49:51.307Z",
    location: "Lagos",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 2,
    company: "Manage",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: true,
    featured: true,
    position: "Driver Assistance",
    level: "Mid level",
    contract: "Part Time",
    created: "2021-11-23T18:49:51.307Z",
    location: "Ogun",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 3,
    company: "Account",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: true,
    featured: false,
    position: "Poultry Attendance",
    level: "Mid level",
    contract: "Part Time",
    created: "2021-11-23T09:49:51.307Z",
    location: "Calabar",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 4,
    company: "MyHome",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Driver",
    level: "Mid level",
    contract: "Contract",
    created: "2018-10-23T19:49:51.307Z",
    location: "Kwara",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Sale Representative",
    level: "Mid Level",
    contract: "Full Time",
    created: "2019-05-23T17:49:51.307Z",
    location: "Niger state",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Mid level",
    contract: "Full Time",
    created: "2021-07-25T08:49:51.307Z",
    location: "Osun",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 7,
    company: "Shortly",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Labour",
    level: "Experience",
    contract: "Contract",
    created: "2022-07-23T15:49:51.307Z",
    location: "Abuja",
    minprice: 750000,
    maxprice: 900000,
    isHiring: false,
  },
  {
    id: 8,
    company: "Insure",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "vetinary Doctor",
    level: "Experience",
    contract: "Full Time",
    created: "2022-01-23T01:09:51.307Z",
    location: "Jos",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Pig Attendance",
    level: "Mid-Level",
    contract: "Full Time",
    created: "1999-11-23T00:09:51.307Z",
    location: "Lagos",
    minprice: 750000,
    maxprice: 900000,
    isHiring: false,
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Experience",
    contract: "Part Time",
    created: "2021-4-23T13:52:51.307Z",
    location: "Kaduna",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 11,
    company: "The Air Filter Company",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Experience",
    contract: "Part Time",
    created: "2021-9-23T08:30:51.307Z",
    location: "Kaduna",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 12,
    company: "The Air Filter Company",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Experience",
    contract: "Part Time",
    created: "2019-2-23T05:49:51.307Z",
    location: "Kaduna",
    minprice: 750000,
    maxprice: 900000,
    isHiring: true,
  },
  {
    id: 13,
    company: "The Air Filter Company",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Experience",
    contract: "Part Time",
    created: "2022-08-23T04:49:51.307Z",
    location: "Kaduna",
    minprice: 750000,
    maxprice: 900000,
    isHiring: false,
  },
  {
    id: 14,
    company: "The Air Filter Company",
    logo: "https://independent.ng/wp-content/uploads/2018/05/Soya-beans.jpg",
    isNew: false,
    featured: false,
    position: "Farm Manager",
    level: "Experience",
    contract: "Part Time",
    created: "2021-10-23T08:19:51.307Z",
    location: "Kaduna",
    minprice: 750000,
    maxprice: 900000,
    isHiring: false,
  },
];
export default listedJobs;
