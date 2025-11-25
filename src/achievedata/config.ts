import { GlobalConfig } from 'payload'

export const AchieveData: GlobalConfig = {
  slug: 'achievements',
  label: 'Achievements',

  access: {
    read: () => true,
    update: ({ req }) => !!req.user, // only admin/user can edit
  },

  fields: [
    {
      name: 'evChargersInstalled',
      label: 'EV Chargers Installed',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'industryExperienceYears',
      label: 'Years of Industry Experience',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
  ],
}

export default AchieveData
