import {} from 'class-validator';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Order {
  @Prop()
  pickupAddress: string;
  @Prop()
  pickupAddress1: string;
  @Prop()
  pickupName: string;
  @Prop()
  pickupContact: string;
  @Prop()
  deliveryLocation: string;
  @Prop()
  deliverylocation1: string;
  @Prop()
  deliveryname: string;
  @Prop()
  deliveryContact: string
}
export const OrderSchema = SchemaFactory.createForClass(Order);
