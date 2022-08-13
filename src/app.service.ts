import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ice cream';
  }
  postHi(): string {
    return 'hello';
  }
}
