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
      firstName: 'Justin',
      lastName: 'Couto',
      avatarUrl: 'https://pbs.twimg.com/profile_images/2386859991/jsdc3mjhahaqbqssmldl_400x400.jpeg',
      githubUrl: 'https://github.com/JustinCouto',
      twitterUrl: 'https://twitter.com/justincouto'
    },
    {
      firstName: 'Greg',
      lastName: 'Arroyo',
      avatarUrl: 'https://pbs.twimg.com/profile_images/759169296677294080/k_-y-6R0_400x400.jpg',
      githubUrl: 'https://github.com/arroyocode',
      twitterUrl: 'https://twitter.com/arroyocode'
    },
    {
      firstName: 'Richard',
      lastName: 'McCluskey',
      avatarUrl: 'https://pbs.twimg.com/profile_images/599667236136030208/wOx67Uzo_400x400.jpg',
      githubUrl: 'https://github.com/rjmccluskey',
      twitterUrl: 'https://twitter.com/rich_code'
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
  }

}
