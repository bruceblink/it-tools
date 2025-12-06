import { BrandGit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'GitIgnore Generator',
  path: '/gitignore-generator',
  description: 'Generate .gitignore for a set of common templates',
  keywords: ['gitignore', 'generator'],
  component: () => import('./gitignore-generator.vue'),
  icon: BrandGit,
  createdAt: new Date('2025-12-06'),
  category: 'Development',
});
