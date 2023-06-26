import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { Request } from 'express';
@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Post('google/login')
  handeLogin() {
    return {
      msg: 'Google oauth 2',
    };
  }
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRediredt(@Req() req: Request) {
    return {
      msg: 'Google redirect',
      user: req.user,
    };
  }
  @Get('home')
  user(@Req() req: Request) {
    if (req.user) {
      return {
        msg: 'Authenticated',
        user: req.user,
      };
    } else {
      return {
        msg: 'Not authenticated',
      };
    }
  }
}
