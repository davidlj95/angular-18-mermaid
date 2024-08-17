import { AfterViewInit, Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import mermaid from "mermaid";

@Component({
  selector: 'app-mermaid',
  standalone: true,
  imports: [],
  templateUrl: './mermaid.component.html',
  styleUrl: './mermaid.component.css'
})
export class MermaidComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private _platformId: object) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      void mermaid.init()
    }
  }
}
