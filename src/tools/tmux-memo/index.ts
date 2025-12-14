import { ScreenShare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Tmux Command Cheatsheet',
  path: '/tmux-memo',
  description: 'Tmux linux command memo',
  keywords: ['terminal', 'linux', 'shell', 'tmux'],
  component: () => import('./tmux-memo.vue'),
  icon: ScreenShare,
  createdAt: new Date('2025-12-13'),
  category: 'Cheatsheets',
});
