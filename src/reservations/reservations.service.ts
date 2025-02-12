import { Get, Injectable, Post } from '@nestjs/common';
import { PrismaService } from '../prisma.service-';
import { Reservation, Prisma } from '@prisma/client';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getReservation(
    reservationWhereUniqueInput: Prisma.ReservationWhereUniqueInput,
  ): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique({
      where: reservationWhereUniqueInput,
    });
  }
  async getGoogleReservations() {}

  @Post()
  async addReservationInGC() {}
  async addReservationInDDBB() {}
  async addReservationInRedis() {}

  async createReservation() {
    await this.addReservationInGC();
    await this.addReservationInDDBB();
    await this.addReservationInRedis();
  }

  async cancelDDBBReservation() {}
  async deleteGoogleReservation() {}
  async deleteRedisReservation() {}

  async cancelReservation() {
    await this.cancelDDBBReservation();
    await this.deleteRedisReservation();
    await this.deleteGoogleReservation();
  }
}
