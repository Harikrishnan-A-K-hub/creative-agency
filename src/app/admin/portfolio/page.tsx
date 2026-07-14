'use client';

import { useState, useEffect } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  image_url: string;
  client: string;
  year: string;
  services: string;
}

export default function PortfolioAdmin() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    category: '',
    image_url: '',
    client: '',
    year: '',
    services: '[]',
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch('/api/portfolio');
    const data = await res.json();
    setItems(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const url = editingItem ? '/api/portfolio' : '/api/portfolio';
    const method = editingItem ? 'PUT' : 'POST';
    
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingItem ? { ...formData, id: editingItem.id } : formData),
    });

    if (res.ok) {
      fetchItems();
      setShowForm(false);
      setEditingItem(null);
      setFormData({ title: '', slug: '', description: '', category: '', image_url: '', client: '', year: '', services: '[]' });
    }
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      description: item.description || '',
      category: item.category || '',
      image_url: item.image_url || '',
      client: item.client || '',
      year: item.year || '',
      services: item.services || '[]',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      await fetch(`/api/portfolio?id=${id}`, { method: 'DELETE' });
      fetchItems();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Portfolio</h1>
        <button
          onClick={() => {
            setEditingItem(null);
            setFormData({ title: '', slug: '', description: '', category: '', image_url: '', client: '', year: '', services: '[]' });
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
            {editingItem ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px', resize: 'vertical' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Client</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Image URL</label>
              <input
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
              />
            </div>
            {formData.image_url && (
              <div style={{ marginBottom: '16px' }}>
                <img src={formData.image_url} alt="Preview" style={{ width: '200px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            )}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="submit" style={{ padding: '10px 24px', background: '#6C63FF', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                {editingItem ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditingItem(null); }} style={{ padding: '10px 24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        {items.map((item) => (
          <div key={item.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            padding: '16px',
            background: '#1A1A2E',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {item.image_url && (
              <img src={item.image_url} alt={item.title} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
            )}
            <div style={{ flex: 1 }}>
              <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>{item.title}</h3>
              <p style={{ color: '#8892B0', fontSize: '12px' }}>{item.category} • {item.client}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => handleEdit(item)} style={{ padding: '6px 12px', background: 'rgba(108, 99, 255, 0.2)', border: 'none', borderRadius: '6px', color: '#6C63FF', fontSize: '12px', cursor: 'pointer' }}>
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} style={{ padding: '6px 12px', background: 'rgba(255, 101, 132, 0.2)', border: 'none', borderRadius: '6px', color: '#FF6584', fontSize: '12px', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}