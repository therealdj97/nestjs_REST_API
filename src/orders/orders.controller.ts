import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Order } from './order.schema';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createOrder(@Body() body: Order) {
    return this.service.addOneOrder(body);
  }
  @Get()
  getAll() {
    return this.service.getAllOrders();
  }

  @Get('/:id')
  async getOneOrder(@Param('id') id: string) {
    const c = await this.service.getOneorder(id);
    if (!c) {
      throw new NotFoundException();
    }
    return c;
  }
}
