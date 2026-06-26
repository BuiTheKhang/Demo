import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { COURSES } from '../data';

interface Booking {
  id: string;
  courseId: string;
  date: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  notes: string;
  createdAt: any;
}

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data: Booking[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as Booking);
        });
        setBookings(data);
      } catch (err: any) {
        console.error("Error fetching bookings: ", err);
        setError("Could not load bookings. Please check your permissions.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="py-24 text-center">Loading bookings...</div>;
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <h1 className="font-display text-4xl text-on-surface font-light mb-12">Admin Dashboard</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 mb-8">
          {error}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant text-sm font-semibold tracking-widest uppercase text-on-surface-variant">
              <th className="pb-4 pr-4">Date</th>
              <th className="pb-4 pr-4">Name</th>
              <th className="pb-4 pr-4">Course</th>
              <th className="pb-4 pr-4">Guests</th>
              <th className="pb-4 pr-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-on-surface-variant">No bookings found.</td>
              </tr>
            ) : (
              bookings.map((booking) => {
                const courseName = COURSES.find(c => c.id === booking.courseId)?.title || booking.courseId;
                return (
                  <tr key={booking.id} className="border-b border-outline-variant hover:bg-surface transition-colors">
                    <td className="py-4 pr-4 whitespace-nowrap">{booking.date}</td>
                    <td className="py-4 pr-4">
                      <div className="font-medium">{booking.firstName} {booking.lastName}</div>
                      <div className="text-sm text-on-surface-variant">{booking.email}</div>
                    </td>
                    <td className="py-4 pr-4">{courseName}</td>
                    <td className="py-4 pr-4">{booking.guests}</td>
                    <td className="py-4 pr-4 text-sm max-w-xs truncate" title={booking.notes}>{booking.notes || '-'}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
