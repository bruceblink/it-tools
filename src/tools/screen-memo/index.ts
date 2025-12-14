import { ScreenShare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Screen Command Cheatsheet',
  path: '/screen-memo',
  description: 'Screen linux command memo',
  keywords: ['terminal', 'linux', 'shell', 'screen'],
  component: () => import('./screen-memo.vue'),
  icon: ScreenShare,
  createdAt: new Date('2025-12-13'),
  category: 'Cheatsheets',
});
