import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { LoaderService } from './../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styles: ``,
})
export class LoaderComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: ElementRef<HTMLDialogElement>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.getStatus().subscribe(show => (show ? this.show() : this.hide()));
  }

  private show(): void {
    this.modal.nativeElement.showModal();
  }

  private hide(): void {
    this.modal.nativeElement.close();
  }

  @HostListener('keydown.escape', ['$event'])
  private escPress(event: KeyboardEvent): void {
    event.preventDefault();
  }
}
