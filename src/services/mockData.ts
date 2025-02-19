import type { ICompany, IJob, IJobGear, IJobImage, IUser } from './types'
import { v4 as uuidv4 } from 'uuid'

const job1Id = '36e96384-9098-4957-8d54-7ca8d952f8a2'
const job2Id = '82f91ea3-c11e-4ba5-8c44-1fc1a07ae879'
const job3Id = '652f2aa7-44e1-44c3-b8c3-4c2748ca786d'
const job4Id = 'c1cb69cc-75fa-430c-8409-584e9f906493'
const company1Id = 'a67e1297-167b-4593-b61d-1803bede4adc'
const company2Id = '8e76c03a-3aa2-4963-9784-bcc680ffe4b6'
const user1Id = '5d1d3d0a-c356-417c-b451-48e224046cb6'
const user2Id = '7336a609-029d-4d35-b2c6-0439072017ce'
const user3Id = 'e602a4af-f190-441d-b5bd-c90cf8d21ca8'
// const user4Id = 'f53102ad-5f21-4a5b-ae28-4857f0500999'

export const jobGear: IJobGear[] = [
  {
    name: 'Safety Equipment',
    quantity: 6
  },
  {
    name: 'Tools',
    quantity: 4
  }
]

export const jobImages: IJobImage[] = [
  {
    id: uuidv4(),
    jobId: job1Id,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: uuidv4(),
    jobId: job1Id,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: uuidv4(),
    jobId: job2Id,
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: uuidv4(),
    jobId: job4Id,
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: uuidv4(),
    jobId: job4Id,
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

export const users: IUser[] = [
  {
    id: user1Id,
    companyId: company1Id,
    email: 'test@test.com',
    username: 'user1',
    firstName: 'John',
    lastName: 'Doe',
    profileUrl: 'https://picsum.photos/60'
  },
  {
    id: user2Id,
    companyId: company1Id,
    email: 'user2@example.com',
    username: 'user2',
    firstName: 'Jane',
    lastName: 'Smith',
    profileUrl: 'https://picsum.photos/60'
  },
  {
    id: user3Id,
    companyId: company1Id,
    email: 'user3@example.com',
    username: 'user3',
    firstName: 'David',
    lastName: 'Johnson',
    profileUrl: 'https://picsum.photos/60'
  }
]

export const companies: ICompany[] = [
  {
    id: company1Id,
    name: 'ABC Construction',
    users: [users[0], users[1]]
  },
  {
    id: company2Id,
    name: 'XYZ Builders',
    users: [users[2]]
  }
]

export const jobDetails = [
  {
    jobId: job1Id,
    gear: jobGear,
    jobImages: [jobImages[0], jobImages[1]],
    jobCrew: [users[0], users[1]]
  },
  {
    id: job2Id,
    gear: jobGear,
    jobImages: [jobImages[2]],
    jobCrew: [users[0], users[1]]
  },
  {
    id: job3Id,
    gear: jobGear,
    jobCrew: [users[2]]
  },
  {
    id: job4Id,
    gear: jobGear,
    jobImages: [jobImages[3], jobImages[4]],
    jobCrew: [users[2]]
  }
]

export const jobs: Partial<IJob[]> = [
  {
    id: job1Id,
    title: 'Job 1',
    details: 'This is job 1.',
    companyId: company1Id,
    location: 'Cambridge, Ontario',
    startDateTime: new Date().toString(),
    gear: [
      {
        name: 'Safety Equipment',
        quantity: 6
      },
      {
        name: 'Hammers',
        quantity: 1
      },
      {
        name: 'Harnesses',
        quantity: 4
      }
    ],
    jobImages: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    jobCrew: [user1Id, user2Id],
    jobContacts: [
      {
        firstName: 'Steve',
        lastName: 'Davis',
        email: 'hey@example.com',
        phone: '519-555-5555'
      }
    ]
  },
  {
    id: job2Id,
    title: 'Job 2',
    details: 'This is job 2.',
    companyId: company1Id,
    location: 'London, Ontario',
    startDateTime: new Date().toString(),
    gear: [{ name: 'Tools', quantity: 4 }],
    jobImages: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    jobCrew: [user1Id, user2Id],
    jobContacts: [
      {
        firstName: 'John',
        lastName: 'Desmond',
        email: 'john@example.com',
        phone: '519-555-5555'
      }
    ]
  },
  {
    id: job3Id,
    title: 'Job 3',
    details: 'This is job 3.',
    companyId: company1Id,
    location: 'Kitchener, Ontario',
    startDateTime: new Date().toString(),
    gear: [{ name: 'Hammer', quantity: 4 }],
    jobCrew: [user3Id]
  },
  {
    id: job4Id,
    title: 'Job 4',
    details: 'This is job 4.',
    companyId: company1Id,
    location: 'London, Ontario',
    startDateTime: new Date().toString(),
    gear: [{ name: 'Screw', quantity: 4 }],
    jobImages: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    jobCrew: [user3Id]
  }
]
