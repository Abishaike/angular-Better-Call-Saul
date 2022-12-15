import { Component } from '@angular/core';
import { Bio } from './roster';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {

  bio: Bio[] = [
    {
      name: "Saul Goodman",
      title: "Criminal Lawyer",
      imgURL: "./assets/img/roster/mugShotJimmy.jpg",
      saying: "Hi. I'm Saul Goodman. Did you know that you have rights? The Constitution says you do, and so do I. I believe that, until proven guilty, every man, woman, and child in this country is innocent. And that's why I fight for you, Albuquerque!"
    },
    {
      name: "Mike Ehrmantraut",
      title: "Private Security",
      imgURL: "./assets/img/roster/mugShotMike.jpg",
      saying: "I have people. I have people waiting for me. They don't know what I do, they never will. They're protected, but I do what I do so they can have a better life and if I live or if I die it really doesn't make a difference to me as long as they have what they need.So when it's my time to go, I will go knowing I did everything I could for them.Now, you ask me how I keep going? That's how."
    },
    {
      name: "Francesca Liddy",
      title: "Secretary",
      imgURL: "./assets/img/roster/mugShotFrancesca.jpg",
      saying: "I am so sorry. Thank you for holding. How may I help you? Well, I can set you up with an appointment. Jimmy is busy right now, but if you'd like- (...) You sound like you're outdoors.Are you staying out of the sun? It's a hot one today.I'm sorry, but Jimmy is unavailable at the moment. If you'd like to leave a message, Mr....Ehrmantraut ? \"Trout,\" like the fish? Uh, I hear Cracker Barrel has excellent air--"
    },
    {
      name: "Huell Babineau",
      title: "Private Security",
      imgURL: "./assets/img/roster/mugShotHuell.jpg",
      saying: "Can I ask you sum'n? Personal, kind of. You're a lawyer. You make good money, right? Legit money, on the level. Your wife's a lawyer. A legit lawyer. Why you do all this?"
    },
    {
      name: "Patrick Kuby",
      title: "Private Security",
      imgURL: "./assets/img/roster/mugShotKuby.jpg",
      saying: "What are you doing? Huell? Hey, quit screwing around. We are here to do a job, not channel Scrooge McDuck. You hearin' me"
    },
    {
      name: "Kim Wexler",
      title: "Legal Consultant",
      imgURL: "./assets/img/roster/mugShotKim.jpg",
      saying: "Bullet holes? That's it? Look, I don't know what it's like where you're from... But here in New Mexico, you leave a soda can out, someone's taking a shot at it. That–that... That's what you're on about? You don't think it's possible a couple of yahoos with guns shot up a piece of junk car, and then rolled it down in a ditch, end of story?"
    },
    {
      name: "Walter White",
      title: "Board Member",
      imgURL: "./assets/img/roster/mugShotWalter.jpg",
      saying: "I have spent my whole life scared – frightened of things that could happen, might happen, might not happen. Fifty years I spent like that.Finding myself awake at three in the morning.But you know what? Ever since my diagnosis, I sleep just fine."
    },
    {
      name: "Marshall Dixon",
      title: "Intern - Advertising",
      imgURL: "./assets/img/roster/mugShotIntern.jpg",
      saying: "You can't rush the process."
    }
  ]
}

