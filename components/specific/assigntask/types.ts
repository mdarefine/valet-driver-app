// Task type definitions for the assigned task section
export interface TaskItem {
  id: string;
  userName: string;
  userImage: string;
  vehicleModel: string;
  vehiclePlate: string;
  pickupLocation: string;
  dropOffLocation: string;
  time: string;
  date: string;
  distance: string;
  duration: string;
  price: string;
  status: 'upcoming' | 'assigned';
}
