import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../components/features/header.component/header.component';
import { MainComponent } from '../components/features/main.component/main.component';
import { FooterComponent } from '../components/features/footer.component/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Frontend');
}
