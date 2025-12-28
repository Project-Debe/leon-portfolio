// Migration script to convert context field from string to Portable Text
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN, // Needs write access
    apiVersion: '2024-01-01',
})

async function migrateContextFields() {
    console.log('Fetching projects with string context fields...')

    // Fetch all projects that have a context field
    const projects = await client.fetch(`*[_type == "project" && defined(context)]{ _id, context }`)

    console.log(`Found ${projects.length} projects with context fields`)

    for (const project of projects) {
        // Skip if already an array (already migrated)
        if (Array.isArray(project.context)) {
            console.log(`Skipping ${project._id} - already migrated`)
            continue
        }

        // Convert string to Portable Text block
        const portableTextContext = [
            {
                _type: 'block',
                _key: Math.random().toString(36).substring(2, 10),
                style: 'normal',
                markDefs: [],
                children: [
                    {
                        _type: 'span',
                        _key: Math.random().toString(36).substring(2, 10),
                        text: project.context,
                        marks: [],
                    },
                ],
            },
        ]

        console.log(`Migrating ${project._id}: "${project.context}"`)

        await client
            .patch(project._id)
            .set({ context: portableTextContext })
            .commit()

        console.log(`✓ Migrated ${project._id}`)
    }

    console.log('Migration complete!')
}

migrateContextFields().catch(console.error)
