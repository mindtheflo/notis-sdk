import { defineNotisApp } from '@notis/sdk/config';

export default defineNotisApp({
  name: 'My Notis App',
  description: 'A new Notis app',
  icon: 'phosphor:squares-four',

  databases: ['items'],

  routes: [
    { path: '/', slug: 'home', name: 'Home', icon: 'phosphor:house', default: true },
    // Example collection tree route:
    // {
    //   path: '/notes',
    //   slug: 'notes',
    //   name: 'Notes',
    //   collection: {
    //     database: 'notes',
    //     titleProperty: 'Name',
    //     parentProperty: 'Parent',
    //     sidebar: {
    //       mode: 'tree',
    //       allowCreate: true,
    //     },
    //   },
    // },
  ],

  tools: [
    'LOCAL_NOTIS_DATABASE_QUERY',
  ],
});
