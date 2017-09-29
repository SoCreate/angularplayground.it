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
      avatarUrl: 'https://pbs.twimg.com/profile_images/664117369535488000/KT3wsR_4_400x400.jpg',
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
      firstName: 'Greg',
      lastName: 'Arroyo',
      avatarUrl: 'https://pbs.twimg.com/profile_images/759169296677294080/k_-y-6R0_400x400.jpg',
      githubUrl: 'https://github.com/arroyocode',
      twitterUrl: 'https://twitter.com/arroyocode'
    },
    {
      firstName: 'Graham',
      lastName: 'Marlow',
      avatarUrl: 'https://pbs.twimg.com/profile_images/882651324894007296/2yiOQyJk_400x400.jpg',
      githubUrl: 'https://github.com/mgmarlow',
      twitterUrl: 'https://twitter.com/mgmarlow'
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
