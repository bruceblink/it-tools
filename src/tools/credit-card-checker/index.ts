import { CreditCard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Credit Card Checker',
  path: '/credit-card-checker',
  description: 'Check a Credit Card number for validity',
  keywords: ['credit', 'card', 'checker'],
  component: () => import('./credit-card-checker.vue'),
  icon: CreditCard,
  createdAt: new Date('2025-10-03'),
  category: 'Data',
});
