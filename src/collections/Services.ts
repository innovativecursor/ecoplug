import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },

  admin: {
    useAsTitle: 'title',
  },

  access: {
    // Anyone can read
    read: () => true,

    // Only logged-in admin users can create/update/delete
    create: ({ req }: { req: { user?: unknown } }) => !!req.user,
    update: ({ req }: { req: { user?: unknown } }) => !!req.user,
    delete: ({ req }: { req: { user?: unknown } }) => !!req.user,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
