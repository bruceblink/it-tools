import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Whois Checker',
  path: '/iana-whois-checker',
  description: 'Check whois for a domain using IANA Website',
  keywords: ['iana', 'whois', 'checker'],
  component: () => import('./iana-whois-checker.vue'),
  icon: World,
  createdAt: new Date('2025-10-03'),
  category: 'Network',
});
