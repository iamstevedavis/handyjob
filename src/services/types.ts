export interface IJob {
  id: string
  title: string
  details: string
  location?: string
  startDateTime?: string
  endDateTime?: string
  jobThumbnailImage?: IJobImage
  gear?: Array<{
    name: string
    quantity: number
  }>
  companyId: string
  jobImages?: Array<{
    imageUrl: string
  }>
  jobCrew?: Array<string>
  jobContacts?: Array<{
    firstName: string
    lastName?: string
    email?: string
    phone?: string
  }>
}

// export interface IJob {
//   id: string
//   title: string
//   details: string
//   location?: string
//   startDateTime?: string
//   endDateTime?: string
//   jobThumbnailImage?: IJobImage
//   gear?: IJobGear[]
//   companyId: string
//   jobImages?: IJobImage[]
//   jobCrew?: IUser[]
//   jobContacts?: IJobContact[]
// }

export interface IJobContact {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

export interface IJobImage {
  id: string
  jobId: string
  imageUrl: string
}

export interface IJobGear {
  // id: string
  // jobId: string
  name: string
  quantity: number
}

export interface ICompany {
  id: string
  name: string
  users: IUser[]
}

export interface IUser {
  id: string
  companyId: string
  email: string
  username: string
  firstName: string
  lastName: string
  profileUrl?: string
}

export interface ILoginCredentials {
  email: string
  password: string
}

export interface ICalendarItem {
  // Required
  id: string
  startDate: Date
  title: string

  // Optional
  tooltip?: string
  endDate?: Date
  url?: string
  classes?: string[] | null
  style?: string
}
