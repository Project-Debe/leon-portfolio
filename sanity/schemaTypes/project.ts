import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    orderings: [orderRankOrdering],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            isPublished: 'isPublished',
        },
        prepare({ title, media, isPublished }) {
            return {
                title: title || 'Untitled Project',
                subtitle: isPublished ? '✅ Published' : '🚫 Draft',
                media,
            }
        },
    },
    fields: [
        orderRankField({ type: 'project' }),
        defineField({
            name: 'isPublished',
            title: 'Published',
            type: 'boolean',
            description: 'Toggle to show/hide this project on your website',
            initialValue: true,
            options: {
                layout: 'switch',
            },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Upload multiple images to enable the marquee effect.',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'url', type: 'url', title: 'URL' },
                        { name: 'type', type: 'string', title: 'Type (e.g., Website, Prototype)' }
                    ]
                }
            ]
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            description: 'Hex code or CSS color for the background (e.g. #0C0C0C)',
        }),
    ],
})
