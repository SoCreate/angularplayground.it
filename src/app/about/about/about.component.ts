import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items = [
    {
      name: 'Justin Schwartzenberger',
      avatarUrl: 'https://avatars1.githubusercontent.com/u/1243236?v=3&s=460',
      githubHandle: '@jschwarty',
      githubUrl: 'https://github.com/jschwarty',
      twitterHandle: '@schwarty',
      twitterUrl: 'https://twitter.com/schwarty'
    },
    {
      name: 'Jami Lurock',
      avatarUrl: 'https://avatars1.githubusercontent.com/u/12436542?v=3&s=460',
      githubHandle: '@lurock',
      githubUrl: 'https://github.com/lurock',
      twitterHandle: '@maindg',
      twitterUrl: 'https://twitter.com/maindg'
    },
    {
      name: 'Justin Couto',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/5085199?v=3&s=460',
      githubHandle: '@JustinCouto',
      githubUrl: 'https://github.com/JustinCouto',
      twitterHandle: '@JustinCouto',
      twitterUrl: 'https://twitter.com/justincouto'
    },
    {
      name: 'Greg Arroyo',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/3469592?v=3&s=460',
      githubHandle: '@arroyocode',
      githubUrl: 'https://github.com/arroyocode',
      twitterHandle: '@arroyocode',
      twitterUrl: 'https://twitter.com/arroyocode'
    }
    ,
    {
      name: 'Brian Treese',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/9142917?v=3&s=460',
      githubHandle: 'brianmtreese',
      githubUrl: 'https://github.com/brianmtreese',
      twitterHandle: '@brianmtreese',
      twitterUrl: 'https://twitter.com/brianmtreese'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
