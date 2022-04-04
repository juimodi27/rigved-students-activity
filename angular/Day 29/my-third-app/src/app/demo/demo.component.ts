import { Component } from "@angular/core";

@Component({
    selector: 'demo',
    template: `<div>
        <h2>Start of Demo Component</h2>
        <p>Username is {{username}}</p>
        <h2>End of Demo Component</h2>
    </div>`
})
export class DemoComponent {
    username : string = "Jui"
}