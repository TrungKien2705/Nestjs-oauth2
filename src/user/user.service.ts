import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async getAllUser() {
    const user = await this.userRepository.find();
    return {
      msg: 'Get all user success',
      user,
    };
  }
  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException('User not not found', HttpStatus.NOT_FOUND);
    }
    return {
      msg: `Get user by id: ${id}`,
      user,
    };
  }
}
