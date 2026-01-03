import { BrandHtml5 } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTML to XHTML',
  path: '/html-to-xhtml',
  description: 'Convert HTML to strict XHTML (XML parsable, self closing tags...)',
  keywords: ['html', 'xhtml'],
  component: () => import('./html-to-xhtml.vue'),
  icon: BrandHtml5,
  createdAt: new Date('2026-01-03'),
  category: 'Web',
});
