import { Controller, Get, Post } from '@nestjs/common';

@Controller('/reservations')
export class ReservationsController {
  @Get()
  getAllReservations() {
    return '';
  }
  @Post()
  createReservation() {
    return '';
  }
}
