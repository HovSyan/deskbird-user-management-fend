import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FluidModule } from 'primeng/fluid';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'app-form-field',
    imports: [IftaLabelModule, InputTextModule, ReactiveFormsModule, MessageModule, FluidModule],
    templateUrl: './form-field.component.html',
    styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
    @Input({ required: true }) control!: FormControl;
    @Input() id?: string;
    @Input() label?: string;
    @Input() required?: boolean;
    @Input() type = 'text';
}
