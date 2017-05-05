import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal-dialog',
    template: `
        <div class="modal fade" [attr.id]="modalId" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" 
                                class="close" 
                                data-dismiss="modal" 
                                aria-label="Close"><span aria-hidden="true">&times;</span>
                        </button>
                        <ng-content select="[head]"></ng-content>
                    </div>
                    <div class="modal-body">
                        <ng-content select="[body]"></ng-content>
                    </div>
                    <div class="modal-footer">
                        <ng-content select="[footer]"></ng-content>
                    </div>
                </div>
            </div>
        </div>    
    `
})
export class ModalDialogComponent {
    @Input() modalId: string = 'modal-dialog';
    constructor() { }
}