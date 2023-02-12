import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '29b'),
    exact: true
  },
  {
    path: '/en/search',
    component: ComponentCreator('/en/search', '99a'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'ce3'),
    routes: [
      {
        path: '/en/docs/additional/embeddings',
        component: ComponentCreator('/en/docs/additional/embeddings', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/hypernetworks',
        component: ComponentCreator('/en/docs/additional/hypernetworks', 'dac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/index',
        component: ComponentCreator('/en/docs/additional/index', 'e6a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/additional/lora',
        component: ComponentCreator('/en/docs/additional/lora', 'c22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/colab',
        component: ComponentCreator('/en/docs/installation/colab', '945'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/index',
        component: ComponentCreator('/en/docs/installation/index', '218'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/installation/local',
        component: ComponentCreator('/en/docs/installation/local', '80a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/extensions',
        component: ComponentCreator('/en/docs/usage/extensions', '385'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/extras',
        component: ComponentCreator('/en/docs/usage/extras', 'c21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/img2img',
        component: ComponentCreator('/en/docs/usage/img2img', 'add'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/important',
        component: ComponentCreator('/en/docs/usage/important', 'a9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/index',
        component: ComponentCreator('/en/docs/usage/index', '6cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/en/docs/usage/txt2img',
        component: ComponentCreator('/en/docs/usage/txt2img', '14c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', '4e6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
