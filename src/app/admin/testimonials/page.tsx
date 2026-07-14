'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
}

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    text: '',
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const res = await fetch('/api/testimonials');
    const data = await res.json();
    setTestimonials(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const method = editingTestimonial ? 'PUT' : 'POST';
    const body = editingTestimonial ? { ...formData, id: editingTestimonial.id } : formData;
    
    const res = await fetch('/api/testimonials', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchTestimonials();
      setShowForm(false);
      setEditingTestimonial(null);
      setFormData({ name: '', role: '', company: '', text: '' });
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      role: testimonial.role || '',
      company: testimonial.company || '',
      text: testimonial.text,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      await fetch(`/api/testimonials?id=${id}`, { method: 'DELETE' });
      fetchTestimonials();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Testimonials</h1>
        <button
          onClick={() => {
            setEditingTestimonial(null);
            setFormData({ name: '', role: '', company: '', text: '' });
            setShowForm(true);
          }}
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Add New
        </button>
      </div>

      {showForm && (
        <div style={{ 
          background: '#1A1A2E', 
          borderRadius: '12px', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '24px', 
          marginBottom: '32px' 
        }}>
          <h2 style={{ color: 'white', fontSize: '18px', marginBottom: '20px' }}>
            {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Testimonial Text</label>
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                rows={4}
                required
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px', resize: 'vertical' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="submit" style={{ padding: '10px 24px', background: '#6C63FF', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                {editingTestimonial ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditingTestimonial(null); }} style={{ padding: '10px 24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ 
            padding: '20px',
            background: '#1A1A2E',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <p style={{ color: '#D1D5DB', fontSize: '14px', marginBottom: '12px', fontStyle: 'italic' }}>
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6C63FF, #FF6584)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '14px',
                }}>
                  {testimonial.name[0]}
                </div>
                <div>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>{testimonial.name}</p>
                  <p style={{ color: '#8892B0', fontSize: '12px' }}>{testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => handleEdit(testimonial)} style={{ padding: '6px 12px', background: 'rgba(108, 99, 255, 0.2)', border: 'none', borderRadius: '6px', color: '#6C63FF', fontSize: '12px', cursor: 'pointer' }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(testimonial.id)} style={{ padding: '6px 12px', background: 'rgba(255, 101, 132, 0.2)', border: 'none', borderRadius: '6px', color: '#FF6584', fontSize: '12px', cursor: 'pointer' }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}