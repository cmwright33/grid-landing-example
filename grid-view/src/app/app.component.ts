import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    events = [
     		{
        		name: "NHL",
        		icon: "www.google.com",
        		links: [
        			{ link:"www.google.com"},
        			{ link:"www.google.com"},
        			{ link:"www.google.com"},
        			{ link:"www.google.com"}
        		]
         	},
         	{
        		name: "NFL",
        		icon: "www.google.com",
        		links: [
        			{ link:"www.google.com"},
        			{ link:"www.google.com"},
        			{ link:"www.google.com"},
        			{ link:"www.google.com"}
        		]	
        	},
        	{

        		name: "NASCAR",
        		icon: "www.google.com",
        		links: [
        			{link:"www.google.com"},
        			{link:"www.google.com"},
        			{link:"www.google.com"},
        			{link:"www.google.com"}
        		]
            },
            {
        		name: "PREMIER LEAGUE",
        		icon: "www.google.com",
        		links: [
        			{link:"www.google.com"},
        			{link:"www.google.com"},
        			{link:"www.google.com"},
        			{link:"www.google.com"}
        		]

        	}
        ]
}
