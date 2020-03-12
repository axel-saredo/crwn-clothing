import React from 'react';

import { ContactContainer, ContactTitle } from './contact.styles';
import ContactForm from '../../components/contact-form/contact-form.component';

const ContactPage = () => (
  <ContactContainer>
    <ContactTitle>Contact Us</ContactTitle>
    <ContactForm />
  </ContactContainer>
);

export default ContactPage;
