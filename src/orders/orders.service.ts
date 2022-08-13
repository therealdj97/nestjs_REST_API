import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private OrderModel: Model<Order>) {}

  addOneOrder(order: Order) {
    const c = new this.OrderModel({ ...order });
    c.save();
    return c;
  }

  getAllOrders() {
    return this.OrderModel.find();
  }

  getOneorder(id: string) {
    // throw new Error('Method not implemented.');
    return this.OrderModel.findById(id);
  }
}
