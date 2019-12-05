import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnInit {
  constructor(private ef: ElementRef, private rendere: Renderer2) {}

  ngOnInit() {
    // this.ef.nativeElement.style.backgroundColor="yellow";
    // this.rendere.setStyle(this.ef.nativeElement,"backgroundColor","green");
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.color = "yellow";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.color = "blue";
  }

  @HostBinding("style.color") color: any = "black";
}
