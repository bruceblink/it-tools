import { MathFunction } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Trigonometric/Equation Curve Visualizer',
  path: '/trigo-viewer',
  description: 'Visualize trigonometric or equations depending on x',
  keywords: ['trigonometry', 'equation', 'curve', 'visualizer'],
  component: () => import('./trigo-viewer.vue'),
  icon: MathFunction,
  createdAt: new Date('2025-12-13'),
  category: 'Maths',
});
