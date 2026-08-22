export interface ContactInfo {
  email: string
  linkedinUrl: string
  githubUrl: string
}

export interface Profile {
  firstName: string
  lastName: string
  description: string
  contact: ContactInfo
}
