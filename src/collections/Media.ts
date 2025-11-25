// import type { CollectionConfig } from 'payload'

// import {
//   FixedToolbarFeature,
//   InlineToolbarFeature,
//   lexicalEditor,
// } from '@payloadcms/richtext-lexical'
// import path from 'path'
// import { fileURLToPath } from 'url'

// import { anyone } from '../access/anyone'
// import { authenticated } from '../access/authenticated'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     create: authenticated,
//     delete: authenticated,
//     read: anyone,
//     update: authenticated,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       //required: true,
//     },
//     {
//       name: 'caption',
//       type: 'richText',
//       editor: lexicalEditor({
//         features: ({ rootFeatures }) => {
//           return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
//         },
//       }),
//     },
//   ],
//   upload: {
//     // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
//     staticDir: path.resolve(dirname, '../../public/media'),
//     adminThumbnail: 'thumbnail',
//     focalPoint: true,
//     imageSizes: [
//       {
//         name: 'thumbnail',
//         width: 300,
//       },
//       {
//         name: 'square',
//         width: 500,
//         height: 500,
//       },
//       {
//         name: 'small',
//         width: 600,
//       },
//       {
//         name: 'medium',
//         width: 900,
//       },
//       {
//         name: 'large',
//         width: 1400,
//       },
//       {
//         name: 'xlarge',
//         width: 1920,
//       },
//       {
//         name: 'og',
//         width: 1200,
//         height: 630,
//         crop: 'center',
//       },
//     ],
//   },
// }

// import type { CollectionConfig } from 'payload'
// import path from 'path'

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//   },
//   admin: {
//     hidden: true,
//   },
//   upload: {
//     staticDir: path.resolve('/var/www/gsl-media'), // For linux
//     // staticDir: path.resolve('C:\Users\Admin\Downloads'), // For windows
//     // staticDir: 'media', // Folder where files will be stored
//     //  staticURL: '/media/images',
//     mimeTypes: ['image/*'], // Allow images & videos
//   },
//   fields: [],
// }

import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: false,
  },

  upload: {
    staticDir: path.resolve('/var/www/gsl-media'),
    mimeTypes: ['image/*'],

    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        crop: 'center',
      },
      {
        name: 'medium',
        width: 800,
        height: 600,
        crop: 'center',
      },
      {
        name: 'large',
        width: 1200,
        height: 800,
        crop: 'center',
      },
    ],
  },

  fields: [],
}
