// History type definitions
export interface HistoryItem {
  id: string;
  dateTime: string;
  pickupLocation: string;
  dropOffLocation: string;
  distance: string;
  time: string;
  price: string;
  tripDetails?: string;
}
