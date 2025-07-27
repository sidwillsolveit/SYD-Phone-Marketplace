
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import phones from '../data/phones';
import './Checkout.css';

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [phone, setPhone] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    promoCode: ''
  });
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  useEffect(() => {
    const selectedPhone = phones.find(p => p.id === parseInt(id));
    if (selectedPhone) {
      setPhone(selectedPhone);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyPromo = () => {
    if (formData.promoCode.trim() === '') {
      setPromoMessage('');
      return;
    }
    if (formData.promoCode === 'MANIPAL') {
      setDiscount(0.1); // 10% discount
      setPromoApplied(true);
      setPromoMessage('Promo code applied! 10% off.');
    } else {
      setDiscount(0);
      setPromoApplied(false);
      setPromoMessage('Invalid promo code.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    alert("Order placed successfully!");
    navigate('/');
  };

  if (!phone) return <div>Loading...</div>;

  const subtotal = phone.price;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div className="checkout-page">
      <h1>Complete Your Purchase</h1>
      
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <img src={phone.image} alt={phone.name} />
            <div>
              <h3>{phone.name}</h3>
              <p>${phone.price.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="price-breakdown">
            <div className="price-row">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="price-row">
              <span>Discount</span>
              <span>-${discountAmount.toLocaleString()}</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="promo-section">
            <input 
              type="text" 
              name="promoCode"
              placeholder="Enter promo code"
              value={formData.promoCode}
              onChange={handleChange}
              style={{ marginRight: '0.5rem' }}
            />
            <button onClick={handleApplyPromo}>APPLY</button>
            {promoMessage && (
              <p style={{ color: promoApplied ? '#0be881' : '#ff5e57', margin: '0.5rem 0 0', fontSize: '0.95rem' }}>
                {promoMessage}
              </p>
            )}
          </div>
        </div>
        
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Shipping Address</label>
            <input 
              type="text" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>State</label>
              <input 
                type="text" 
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>ZIP Code</label>
              <input 
                type="text" 
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <h2>Payment Details</h2>
          
          <div className="form-group">
            <label>Card Number</label>
            <input 
              type="text" 
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input 
                type="text" 
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            
            <div className="form-group">
              <label>CVC</label>
              <input 
                type="text" 
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
          </div>
          
          <button type="submit" className="place-order-btn">
            PLACE ORDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
