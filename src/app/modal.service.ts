import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef: BsModalRef | null = null;

  constructor(private modalService: BsModalService) {}


  openModalWithCustomWidth() {
    const initialState = {
      isCustomWidth: true, // Set to true to apply custom width
    };
    this.modalRef = this.modalService.show(ModalComponent, { initialState });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }
}
