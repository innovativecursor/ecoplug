import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: ({ req }: { req: { user?: unknown } }) => !!req.user,
    update: ({ req }: { req: { user?: unknown } }) => !!req.user,
    delete: ({ req }: { req: { user?: unknown } }) => !!req.user,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      name: 'feedback',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
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
