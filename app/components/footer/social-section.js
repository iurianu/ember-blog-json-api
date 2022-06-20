import Component from '@glimmer/component';

export default class SocialSectionComponent extends Component {
  socialItems = [
    {
      title: 'Follow me on GitHub!',
      url: 'https://github.com/iurianu',
      icon: 'github',
    },
    {
      title: 'Connect with me on LinkedIn!',
      url: 'https://www.linkedin.com/in/iurianu/',
      icon: 'linkedin',
    },
    {
      title: 'Join me on Discord!',
      url: 'https://discord.gg/6nvcnCNNpF',
      icon: 'discord',
    },
    {
      title: 'Follow me on Facebook!',
      url: 'https://www.facebook.com/iurianu',
      icon: 'facebook-f',
    },
    {
      title: 'Follow me on Twitter!',
      url: 'https://twitter.com/iurianu',
      icon: 'twitter',
    },
  ];
}
