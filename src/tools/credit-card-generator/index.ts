import { CreditCard } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate as t } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: t('tools.credit-card-generator.title'),
  path: '/credit-card-generator',
  description: t('tools.credit-card-generator.description'),
  keywords: ['credit', 'card', 'generator'],
  component: () => import('./credit-card-generator.vue'),
  icon: CreditCard,
  createdAt: new Date('2025-10-03'),
  category: 'Data',
});
