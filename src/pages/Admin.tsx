import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { COURSES } from '../data';
import { Trash2, Edit2, X, Check } from 'lucide-react';

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
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Booking>>({});

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn đặt lịch này không?")) {
      try {
        await deleteDoc(doc(db, 'bookings', id));
        setBookings(bookings.filter(b => b.id !== id));
      } catch (err) {
        console.error("Error deleting document: ", err);
        setError("Không thể xóa. Vui lòng thử lại.");
      }
    }
  };

  const startEdit = (booking: Booking) => {
    setEditingId(booking.id);
    setEditForm({ ...booking });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async (id: string) => {
    try {
      await updateDoc(doc(db, 'bookings', id), {
        courseId: editForm.courseId,
        date: editForm.date,
        guests: Number(editForm.guests),
        firstName: editForm.firstName,
        lastName: editForm.lastName,
        email: editForm.email,
        notes: editForm.notes
      });
      setBookings(bookings.map(b => b.id === id ? { ...b, ...editForm } as Booking : b));
      setEditingId(null);
    } catch (err) {
      console.error("Error updating document: ", err);
      setError("Không thể cập nhật. Vui lòng thử lại.");
    }
  };

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
              <th className="pb-4 pr-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-on-surface-variant">No bookings found.</td>
              </tr>
            ) : (
              bookings.map((booking) => {
                const courseName = COURSES.find(c => c.id === booking.courseId)?.title || booking.courseId;
                return (
                  <tr key={booking.id} className="border-b border-outline-variant hover:bg-surface transition-colors">
                    {editingId === booking.id ? (
                      <>
                        <td className="py-4 pr-4">
                          <input type="date" className="border border-outline-variant px-2 py-1 w-full bg-background" value={editForm.date || ''} onChange={(e) => setEditForm({...editForm, date: e.target.value})} />
                        </td>
                        <td className="py-4 pr-4 space-y-2">
                          <input type="text" placeholder="First Name" className="border border-outline-variant px-2 py-1 w-full bg-background" value={editForm.firstName || ''} onChange={(e) => setEditForm({...editForm, firstName: e.target.value})} />
                          <input type="text" placeholder="Last Name" className="border border-outline-variant px-2 py-1 w-full bg-background" value={editForm.lastName || ''} onChange={(e) => setEditForm({...editForm, lastName: e.target.value})} />
                          <input type="email" placeholder="Email" className="border border-outline-variant px-2 py-1 w-full bg-background" value={editForm.email || ''} onChange={(e) => setEditForm({...editForm, email: e.target.value})} />
                        </td>
                        <td className="py-4 pr-4">
                          <select className="border border-outline-variant px-2 py-1 w-full bg-background" value={editForm.courseId || ''} onChange={(e) => setEditForm({...editForm, courseId: e.target.value})}>
                            {COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                          </select>
                        </td>
                        <td className="py-4 pr-4">
                          <input type="number" min="1" className="border border-outline-variant px-2 py-1 w-16 bg-background" value={editForm.guests || 1} onChange={(e) => setEditForm({...editForm, guests: Number(e.target.value)})} />
                        </td>
                        <td className="py-4 pr-4">
                          <textarea className="border border-outline-variant px-2 py-1 w-full bg-background resize-none" value={editForm.notes || ''} onChange={(e) => setEditForm({...editForm, notes: e.target.value})} />
                        </td>
                        <td className="py-4 pr-4 text-right whitespace-nowrap">
                          <button onClick={() => saveEdit(booking.id)} className="text-green-600 hover:text-green-800 mr-3" title="Save">
                            <Check size={18} />
                          </button>
                          <button onClick={cancelEdit} className="text-gray-500 hover:text-gray-700" title="Cancel">
                            <X size={18} />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-4 pr-4 whitespace-nowrap">{booking.date}</td>
                        <td className="py-4 pr-4">
                          <div className="font-medium">{booking.firstName} {booking.lastName}</div>
                          <div className="text-sm text-on-surface-variant">{booking.email}</div>
                        </td>
                        <td className="py-4 pr-4">{courseName}</td>
                        <td className="py-4 pr-4">{booking.guests}</td>
                        <td className="py-4 pr-4 text-sm max-w-xs truncate" title={booking.notes}>{booking.notes || '-'}</td>
                        <td className="py-4 pr-4 text-right whitespace-nowrap">
                          <button onClick={() => startEdit(booking)} className="text-blue-600 hover:text-blue-800 mr-3" title="Edit">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => handleDelete(booking.id)} className="text-red-600 hover:text-red-800" title="Delete">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </>
                    )}
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
