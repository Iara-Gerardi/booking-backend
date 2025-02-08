export interface CreateReservation {
  guestData: any;
  date: {
    from: string;
    to: string;
  };
}
