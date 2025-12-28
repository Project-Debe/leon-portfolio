import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { ProjectsManager } from './components/ProjectsManager'
import { EyeOpenIcon, CogIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // Quick Publish Manager with toggle switches
      S.listItem()
        .title('Quick Publish')
        .icon(EyeOpenIcon)
        .child(
          S.component(ProjectsManager)
            .title('Quick Publish Manager')
            .id('quick-publish')
        ),
      // Orderable projects list with drag-and-drop
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        icon: CogIcon,
        S,
        context,
      }),
      S.divider(),
      // Keep other document types with default behavior
      ...S.documentTypeListItems().filter(
        (listItem) => !['project'].includes(listItem.getId() as string)
      ),
    ])

