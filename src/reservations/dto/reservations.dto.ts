import { Guest } from "src/guests/dto/guest.dto";

interface DateInterface {
  from: string;
  to: string;
}

export interface CreateReservation {
  guestData: Guest;
  date: DateInterface;
}

export interface GetAllReservations {
  dates: DateInterface[];
}
