'use client'

import { useCallback } from 'react'
import { useClient } from 'sanity'
import { Card, Flex, Switch, Text, Box } from '@sanity/ui'
import { SanityDocument } from 'sanity'

interface ProjectDocument extends SanityDocument {
    title?: string
    isPublished?: boolean
    mainImage?: {
        asset?: {
            _ref: string
        }
    }
}

interface ProjectListItemProps {
    document: ProjectDocument
}

export function ProjectListItem({ document }: ProjectListItemProps) {
    const client = useClient({ apiVersion: '2024-01-01' })

    const handleToggle = useCallback(async () => {
        const newValue = !document.isPublished

        try {
            await client
                .patch(document._id)
                .set({ isPublished: newValue })
                .commit()
        } catch (error) {
            console.error('Failed to update publish status:', error)
        }
    }, [client, document._id, document.isPublished])

    return (
        <Card padding={2} radius={2}>
            <Flex align="center" gap={3}>
                <Box flex={1}>
                    <Text size={1} weight="semibold">
                        {document.title || 'Untitled Project'}
                    </Text>
                </Box>
                <Flex align="center" gap={2}>
                    <Text size={0} muted>
                        {document.isPublished ? 'Published' : 'Draft'}
                    </Text>
                    <Switch
                        checked={document.isPublished ?? false}
                        onChange={handleToggle}
                    />
                </Flex>
            </Flex>
        </Card>
    )
}
