import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items = [
    {
      firstName: 'Justin',
      lastName: 'Schwartzenberger',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/1243236?s=460&v=4',
      githubUrl: 'https://github.com/jschwarty',
      twitterUrl: 'https://twitter.com/schwarty'
    },
    {
      firstName: 'Jami',
      lastName: 'Lurock',
      avatarUrl: 'https://pbs.twimg.com/profile_images/479643327441018880/z9boZ906_400x400.jpeg',
      githubUrl: 'https://github.com/lurock',
      twitterUrl: 'https://twitter.com/maindg'
    },
    {
      firstName: 'Graham',
      lastName: 'Marlow',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/3778552?s=460&v=4',
      githubUrl: 'https://github.com/mgmarlow'
    },
    {
      firstName: 'Brian',
      lastName: 'Treese',
      avatarUrl: 'https://pbs.twimg.com/profile_images/766150298549252096/PXESHOSy_400x400.jpg',
      githubUrl: 'https://github.com/brianmtreese',
      twitterUrl: 'https://twitter.com/brianmtreese'
    }
  ];

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
