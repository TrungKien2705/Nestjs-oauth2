import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(200)
  async getAllUser() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  @HttpCode(200)
  async getUserByid(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
}
