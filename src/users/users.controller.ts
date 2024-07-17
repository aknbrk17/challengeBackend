import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService, Contact } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll(): Contact[] {
    return this.UsersService.findAll();
  }

  @Post()
  create(@Body() contact: Omit<Contact, 'id'>): Contact {
    return this.UsersService.create(contact);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() contact: Omit<Contact, 'id'>): Contact {
    return this.UsersService.update(+id, contact);
  }

  @Delete(':id')
  delete(@Param('id') id: number): boolean {
    return this.UsersService.delete(+id);
  }
}
