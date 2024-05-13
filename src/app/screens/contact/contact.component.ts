import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  showSuccessAlert: boolean;
  showErrorAlert: boolean;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    emailjs.init('xSKub5Lbgdm0Xlbvq'); // public key
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
  }

  async submitForm() {
    const templateParams = {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    };

    try {
      const response = await emailjs.send('service_tt3s3sk', 'template_bzky2sv', templateParams); // user_id, template_id
      this.showSuccessAlert = true;
      console.log('Email sent successfully:', response);
    } catch (error) {
      this.showErrorAlert = true;
      console.error('Error sending email:', error);
    } finally {
      // Manually trigger change detection to update the view
      this.cdr.detectChanges();
    }
  }
}
