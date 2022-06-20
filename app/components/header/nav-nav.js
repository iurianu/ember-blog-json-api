import Component from '@glimmer/component';

export default class NavNavComponent extends Component {
  navs = [
    {
      title: 'Articles',
      route: 'posts',
    },
    {
      title: 'Authors',
      route: 'users',
    },
    {
      title: 'About',
      route: 'about',
    },
    {
      title: 'Contact',
      route: 'contact',
    },
  ];
}
