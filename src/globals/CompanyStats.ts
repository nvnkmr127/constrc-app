import type { GlobalConfig } from 'payload'

export const CompanyStats: GlobalConfig = {
  slug: 'company-stats',
  admin: {
    group: 'Marketing',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'yearsOfExperience',
      type: 'number',
      defaultValue: 10,
    },
    {
      name: 'projectsCompleted',
      type: 'number',
      defaultValue: 150,
    },
    {
      name: 'happyClients',
      type: 'number',
      defaultValue: 200,
    },
    {
      name: 'awardsWon',
      type: 'number',
      defaultValue: 5,
    },
  ],
}
