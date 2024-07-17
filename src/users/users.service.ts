import { Injectable } from '@nestjs/common';

export interface Contact {
  id: number;
  name: string;
  surname: string;
  phoneNumber: string;
}

@Injectable()
export class UsersService {
  private contacts: Contact[] = [];
  private idCounter = 1;

  findAll(): Contact[] {
    return this.contacts;
  }

  create(contact: Omit<Contact, 'id'>): Contact {
    const newContact = { id: this.idCounter++, ...contact };
    this.contacts.push(newContact);
    return newContact;
  }

  update(id: number, contact: Omit<Contact, 'id'>): Contact {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index === -1) {
      return null;
    }
    this.contacts[index] = { id, ...contact };
    return this.contacts[index];
  }

  delete(id: number): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index === -1) {
      return false;
    }
    this.contacts.splice(index, 1);
    return true;
  }
}