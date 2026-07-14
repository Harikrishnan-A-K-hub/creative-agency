'use client';

import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category: string;
  published: number;
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    category: '',
    published: false,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/blog');
    const data = await res.json();
    setPosts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const method = editingPost ? 'PUT' : 'POST';
    const body = editingPost ? { ...formData, id: editingPost.id } : formData;
    
    const res = await fetch('/api/blog', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      fetchPosts();
      setShowForm(false);
      setEditingPost(null);
      setFormData({ title: '', slug: '', excerpt: '', content: '', cover_image: '', category: '', published: false });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content || '',
      cover_image: post.cover_image || '',
      category: post.category || '',
      published: post.published === 1,
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await fetch(`/api/blog?id=${id}`, { method: 'DELETE' });
      fetchPosts();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Blog Posts</h1>
        <button
          onClick={() => {
            setEditingPost(null);
            setFormData({ title: '', slug: '', excerpt: '', content: '', cover_image: '', category: '', published: false });
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
            {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
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
                <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Cover Image URL</label>
                <input
                  type="url"
                  value={formData.cover_image}
                  onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Excerpt</label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px', resize: 'vertical' }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#8892B0', fontSize: '14px' }}>Content (HTML)</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={8}
                style={{ width: '100%', padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '14px', resize: 'vertical', fontFamily: 'monospace' }}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8892B0', fontSize: '14px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  style={{ width: '16px', height: '16px' }}
                />
                Published
              </label>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button type="submit" style={{ padding: '10px 24px', background: '#6C63FF', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                {editingPost ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditingPost(null); }} style={{ padding: '10px 24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '14px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'grid', gap: '16px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            padding: '16px',
            background: '#1A1A2E',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '600' }}>{post.title}</h3>
                <span style={{ 
                  padding: '2px 8px', 
                  background: post.published ? 'rgba(0, 212, 170, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  color: post.published ? '#00D4AA' : '#8892B0',
                  borderRadius: '4px',
                  fontSize: '10px',
                }}>
                  {post.published ? 'Published' : 'Draft'}
                </span>
              </div>
              <p style={{ color: '#8892B0', fontSize: '12px' }}>{post.category} • {post.slug}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => handleEdit(post)} style={{ padding: '6px 12px', background: 'rgba(108, 99, 255, 0.2)', border: 'none', borderRadius: '6px', color: '#6C63FF', fontSize: '12px', cursor: 'pointer' }}>
                Edit
              </button>
              <button onClick={() => handleDelete(post.id)} style={{ padding: '6px 12px', background: 'rgba(255, 101, 132, 0.2)', border: 'none', borderRadius: '6px', color: '#FF6584', fontSize: '12px', cursor: 'pointer' }}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}