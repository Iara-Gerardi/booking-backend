import { Controller, Get } from '@nestjs/common';

@Controller('/reservations')
export class ReservationsController {
  @Get()
  getAllReservations() {
    return 'Todas las propiedades';
  }
}
