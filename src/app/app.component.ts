import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Add RouterModule to the imports array
  template: `
    <h1>Welcome to the Product Page</h1>
    <router-outlet></router-outlet> <!-- This will now work -->
  `,
  styles: []
})
export class AppComponent {}