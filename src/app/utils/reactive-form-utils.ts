import { AbstractControl, FormArray, FormGroup, isFormArray, isFormControl, isFormGroup } from "@angular/forms";

export function forEachControl(group: FormGroup, λ: (control: AbstractControl) => void) {
    λ(group)
    for (const control of Object.values(group.controls)) {
        if (isFormGroup(control) || isFormArray(control)) {
            forEachControl(group, λ);
        } else if (isFormControl(control)) {
            λ(control)
        }
    }
}

export function markAllAsDirty(group: FormGroup) {
    return forEachControl(group, (c) => c.markAsDirty());
}