import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', 'e8c'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', 'fd8'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'e50'),
    routes: [
      {
        path: '/en/docs/additional/embeddings',
        component: ComponentCreator('/en/docs/additional/embeddings', 'b48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/hypernetworks',
        component: ComponentCreator('/en/docs/additional/hypernetworks', '1ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/index',
        component: ComponentCreator('/en/docs/additional/index', '79b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/lora',
        component: ComponentCreator('/en/docs/additional/lora', '1a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/colab',
        component: ComponentCreator('/en/docs/installation/colab', '325'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/index',
        component: ComponentCreator('/en/docs/installation/index', 'fe7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/local',
        component: ComponentCreator('/en/docs/installation/local', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/extensions',
        component: ComponentCreator('/en/docs/usage/extensions', '3ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/extras',
        component: ComponentCreator('/en/docs/usage/extras', '92e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/img2img',
        component: ComponentCreator('/en/docs/usage/img2img', '3e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/important',
        component: ComponentCreator('/en/docs/usage/important', '7a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/index',
        component: ComponentCreator('/en/docs/usage/index', '597'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/txt2img',
        component: ComponentCreator('/en/docs/usage/txt2img', 'dd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '2e5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
