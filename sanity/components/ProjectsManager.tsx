'use client'

import { useCallback, useState, useEffect } from 'react'
import { useClient } from 'sanity'
import { Card, Flex, Switch, Text, Box, Stack, Spinner, Badge } from '@sanity/ui'

interface ProjectDocument {
    _id: string
    _type: string
    title?: string
    isPublished?: boolean
    orderRank?: string
}

export function ProjectsManager() {
    const client = useClient({ apiVersion: '2024-01-01' })
    const [projects, setProjects] = useState<ProjectDocument[]>([])
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState<string | null>(null)

    // Fetch projects
    const fetchProjects = useCallback(async () => {
        try {
            const result = await client.fetch<ProjectDocument[]>(
                `*[_type == "project"] | order(orderRank asc) {
          _id,
          _type,
          title,
          isPublished,
          orderRank
        }`
            )
            setProjects(result)
        } catch (error) {
            console.error('Failed to fetch projects:', error)
        } finally {
            setLoading(false)
        }
    }, [client])

    useEffect(() => {
        fetchProjects()

        // Subscribe to real-time updates
        const subscription = client
            .listen('*[_type == "project"]')
            .subscribe(() => {
                fetchProjects()
            })

        return () => subscription.unsubscribe()
    }, [client, fetchProjects])

    const handleToggle = useCallback(async (projectId: string, currentValue: boolean) => {
        setUpdating(projectId)

        try {
            await client
                .patch(projectId)
                .set({ isPublished: !currentValue })
                .commit()

            // Update local state immediately for better UX
            setProjects(prev =>
                prev.map(p =>
                    p._id === projectId ? { ...p, isPublished: !currentValue } : p
                )
            )
        } catch (error) {
            console.error('Failed to update publish status:', error)
        } finally {
            setUpdating(null)
        }
    }, [client])

    if (loading) {
        return (
            <Card padding={5}>
                <Flex align="center" justify="center" gap={3}>
                    <Spinner muted />
                    <Text muted>Loading projects...</Text>
                </Flex>
            </Card>
        )
    }

    return (
        <Card padding={4}>
            <Stack space={4}>
                <Box>
                    <Text size={2} weight="bold">Quick Publish Manager</Text>
                    <Text size={1} muted style={{ marginTop: '8px' }}>
                        Toggle projects on/off without opening them.
                    </Text>
                </Box>
                <Stack space={2}>
                    {projects.map((project) => (
                        <Card
                            key={project._id}
                            padding={3}
                            radius={2}
                            shadow={1}
                            tone={project.isPublished ? 'positive' : 'default'}
                        >
                            <Flex align="center" gap={3}>
                                <Box flex={1}>
                                    <Text size={2} weight="semibold">
                                        {project.title || 'Untitled Project'}
                                    </Text>
                                </Box>
                                <Flex align="center" gap={3}>
                                    <Badge
                                        tone={project.isPublished ? 'positive' : 'default'}
                                        radius={2}
                                    >
                                        {project.isPublished ? 'Published' : 'Draft'}
                                    </Badge>
                                    {updating === project._id ? (
                                        <Spinner muted />
                                    ) : (
                                        <Switch
                                            checked={project.isPublished ?? false}
                                            onChange={() => handleToggle(project._id, project.isPublished ?? false)}
                                        />
                                    )}
                                </Flex>
                            </Flex>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </Card>
    )
}
