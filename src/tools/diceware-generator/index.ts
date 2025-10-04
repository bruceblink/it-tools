import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Diceware Password Generator',
  path: '/diceware-generator',
  description: 'Generate random password using Diceware method',
  keywords: ['diceware', 'generator'],
  component: () => import('./diceware-generator.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2025-10-04'),
  category: 'Generators',
});
