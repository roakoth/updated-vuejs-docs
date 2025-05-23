// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://roakoth.github.io',
    base: '/updated-vuejs-docs',
    integrations: [starlight({
        title: 'Vue.js',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introduction', slug: 'updated-vuejs-docs/guide/introduction' },
                    { label: 'Installation', slug: 'guide/installation' },
                    { label: 'Creating a Vue Application', slug: 'guide/application' },
                ],
            },
            {
                label: 'Core Concepts',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Template Syntax', slug: 'core-concepts/template-syntax' },
                    { label: 'Reactivity Fundamentals', slug: 'core-concepts/reactivity-fundamentals' },
                    { label: 'Computed Properties', slug: 'core-concepts/computed' },
                    { label: 'Class and Style Bindings', slug: 'core-concepts/class-and-style' },
                ],
                
            },
            {
                label: 'Components In-Depth',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Component Registration', slug: 'components-in-depth/registration' },
                    { label: 'Props', slug: 'components-in-depth/props' },
                    { label: 'Component Events', slug: 'components-in-depth/events' },
                    { label: 'Component v-model', slug: 'components-in-depth/component-v-model' },
                    { label: 'Fallthrough Attributes', slug: 'components-in-depth/attrs' },
                ],
            },
            {
                label: 'Reusability',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Composables', slug: 'reusability/composables' },
                    { label: 'Custom Directives', slug: 'reusability/custom-directives' },
                ],
                
            },
        ],
		}), mdx()],
});