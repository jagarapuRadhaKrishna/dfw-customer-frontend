'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import './LoginModal.css';

export default function LoginModal() {
  const router = useRouter();
  const { authModal, closeAuthModal, loginWithMobile, login, register, demoUser } = useAuth();

  // Mode: 'otp' | 'password' | 'register'
  const [mode, setMode] = useState('otp');

  // Form states
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [agreed, setAgreed] = useState(true);

  // Password login states
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  // Register states
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  // Status & Errors
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync mode with modal type when modal opens
  useEffect(() => {
    if (authModal.isOpen) {
      setError('');
      setInfoMsg('');
      setOtp('');
      setOtpSent(false);
      setResendTimer(0);
      if (authModal.type === 'register') {
        setMode('register');
      } else {
        setMode('otp');
      }
    }
  }, [authModal.isOpen, authModal.type]);

  // Resend OTP countdown timer
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && authModal.isOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [authModal.isOpen, closeAuthModal]);

  if (!authModal.isOpen) return null;

  // Determine left-side image based on modal type/context
  const getBannerImage = () => {
    if (authModal.type === 'wishlist') {
      return '/images/auth/wishlist-popup.png';
    }
    if (authModal.type === 'cart') {
      return '/images/auth/cart-popup.png';
    }
    if (mode === 'register') {
      return '/images/auth/register-page.png';
    }
    return '/images/auth/login-popup.png';
  };

  const handleMobileChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobile(val);
    setError('');
  };

  const handleSendOtp = (e) => {
    if (e) e.preventDefault();
    if (mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms of Service & Privacy Policy.');
      return;
    }

    setError('');
    setOtpSent(true);
    setResendTimer(30);
    setInfoMsg(`OTP sent to +91 ${mobile}. (Demo OTP: 1234)`);
    // Pre-fill demo OTP after brief delay for easy testing
    setTimeout(() => {
      setOtp('1234');
    }, 600);
  };

  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault();
    if (!otpSent) {
      handleSendOtp();
      return;
    }

    if (otp.length < 4) {
      setError('Please enter the 4-digit OTP.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      await loginWithMobile(mobile, otp);
      if (authModal.redirectUrl) {
        router.push(authModal.redirectUrl);
      }
    } catch (err) {
      setError(err.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordLogin = async (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) {
      setError('Please enter your email or mobile number.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      await login(emailOrPhone, password);
      if (authModal.redirectUrl) {
        router.push(authModal.redirectUrl);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!regName.trim() || !regEmail.trim() || !regPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      await register({
        name: regName,
        email: regEmail,
        phone: regPhone,
        password: regPassword,
      });
      if (authModal.redirectUrl) {
        router.push(authModal.redirectUrl);
      }
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isMobileValid = mobile.length === 10;
  const isOtpValid = otp.length === 4;

  return (
    <div className="login-modal-overlay" onClick={closeAuthModal} role="dialog" aria-modal="true">
      <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Left Column: Visual Banner Image */}
        <div className="lm-left">
          <img
            src={getBannerImage()}
            alt="Log In To View Exclusive Offers"
            className="lm-banner-img"
          />
        </div>

        {/* Right Column: Form */}
        <div className="lm-right">
          {/* Close button */}
          <button
            type="button"
            className="lm-close-btn"
            onClick={closeAuthModal}
            aria-label="Close dialog"
          >
            Close
          </button>

          {/* MODE 1: Mobile + OTP (Matches User Screenshot Exactly) */}
          {mode === 'otp' && (
            <div className="lm-content">
              <h2 className="lm-title">Login / Sign Up</h2>

              {error && (
                <div className="lm-alert-error" role="alert">
                  <span className="lm-alert-icon">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              {infoMsg && (
                <div className="lm-alert-info">
                  <span className="lm-alert-icon">✓</span>
                  <span>{infoMsg}</span>
                </div>
              )}

              <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="lm-form">
                {/* Mobile Number Input */}
                <div className="lm-field-group">
                  <label htmlFor="lm-mobile" className="lm-label">
                    Mobile Number
                  </label>
                  <input
                    id="lm-mobile"
                    type="tel"
                    placeholder="Enter 10-digit Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    maxLength={10}
                    className="lm-input"
                    autoFocus
                    required
                  />
                </div>

                {/* OTP Input */}
                <div className="lm-field-group">
                  <label htmlFor="lm-otp" className="lm-label">
                    OTP
                  </label>
                  <input
                    id="lm-otp"
                    type="text"
                    placeholder="Enter 4-digit OTP to login"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    maxLength={4}
                    className={`lm-input ${!otpSent ? 'disabled' : ''}`}
                    disabled={!otpSent}
                  />
                  {otpSent && resendTimer > 0 && (
                    <span className="lm-resend-countdown">Resend OTP in {resendTimer}s</span>
                  )}
                  {otpSent && resendTimer === 0 && (
                    <button
                      type="button"
                      className="lm-resend-btn"
                      onClick={handleSendOtp}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                {/* Terms of Service agreement checkbox */}
                <label className="lm-terms-row">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="lm-checkbox"
                  />
                  <span className="lm-terms-text">
                    By continuing, I agree to the{' '}
                    <span className="lm-link-orange">Terms of Service</span> and{' '}
                    <span className="lm-link-orange">Privacy &amp; Legal Policy</span>
                  </span>
                </label>

                {/* Login with Password switch link */}
                <div className="lm-switch-row">
                  <button
                    type="button"
                    className="lm-password-switch-link"
                    onClick={() => {
                      setMode('password');
                      setError('');
                      setInfoMsg('');
                    }}
                  >
                    Login with Password
                  </button>
                </div>

                {/* Primary CTA button */}
                <button
                  type="submit"
                  disabled={isSubmitting || (!otpSent && !isMobileValid) || (otpSent && !isOtpValid)}
                  className={`lm-submit-btn ${
                    (otpSent ? isOtpValid : isMobileValid) ? 'active' : 'inactive'
                  }`}
                >
                  {isSubmitting
                    ? 'Processing...'
                    : otpSent
                    ? 'Verify & Login'
                    : 'Send OTP'}
                </button>
              </form>
            </div>
          )}

          {/* MODE 2: Password Login */}
          {mode === 'password' && (
            <div className="lm-content">
              <h2 className="lm-title">Login with Password</h2>

              {error && (
                <div className="lm-alert-error" role="alert">
                  <span className="lm-alert-icon">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handlePasswordLogin} className="lm-form">
                <div className="lm-field-group">
                  <label htmlFor="lm-email" className="lm-label">
                    Email or Mobile Number
                  </label>
                  <input
                    id="lm-email"
                    type="text"
                    placeholder="Enter Email or Mobile"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="lm-input"
                    autoFocus
                    required
                  />
                </div>

                <div className="lm-field-group">
                  <label htmlFor="lm-pwd" className="lm-label">
                    Password
                  </label>
                  <input
                    id="lm-pwd"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="lm-input"
                    required
                  />
                </div>

                <div className="lm-switch-row-split">
                  <button
                    type="button"
                    className="lm-password-switch-link"
                    onClick={() => {
                      setMode('otp');
                      setError('');
                      setInfoMsg('');
                    }}
                  >
                    ← Login with OTP
                  </button>
                  <button
                    type="button"
                    className="lm-forgot-link"
                    onClick={() => setInfoMsg('Password reset instructions sent.')}
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !emailOrPhone.trim() || !password}
                  className={`lm-submit-btn ${emailOrPhone && password ? 'active' : 'inactive'}`}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>

                <div className="lm-demo-quick-login">
                  <button
                    type="button"
                    className="lm-demo-btn"
                    onClick={() => {
                      setEmailOrPhone(demoUser.email);
                      setPassword('Demo@1234');
                    }}
                  >
                    Use Demo Credentials ({demoUser.email})
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* MODE 3: Register */}
          {mode === 'register' && (
            <div className="lm-content">
              <h2 className="lm-title">Create an Account</h2>

              {error && (
                <div className="lm-alert-error" role="alert">
                  <span className="lm-alert-icon">⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleRegisterSubmit} className="lm-form">
                <div className="lm-field-group">
                  <label htmlFor="lm-reg-name" className="lm-label">
                    Full Name
                  </label>
                  <input
                    id="lm-reg-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="lm-input"
                    required
                  />
                </div>

                <div className="lm-field-group">
                  <label htmlFor="lm-reg-email" className="lm-label">
                    Email Address
                  </label>
                  <input
                    id="lm-reg-email"
                    type="email"
                    placeholder="Enter your email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="lm-input"
                    required
                  />
                </div>

                <div className="lm-field-group">
                  <label htmlFor="lm-reg-phone" className="lm-label">
                    Mobile Number
                  </label>
                  <input
                    id="lm-reg-phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="lm-input"
                  />
                </div>

                <div className="lm-field-group">
                  <label htmlFor="lm-reg-pwd" className="lm-label">
                    Create Password
                  </label>
                  <input
                    id="lm-reg-pwd"
                    type="password"
                    placeholder="Minimum 6 characters"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="lm-input"
                    required
                  />
                </div>

                <div className="lm-switch-row">
                  <button
                    type="button"
                    className="lm-password-switch-link"
                    onClick={() => {
                      setMode('otp');
                      setError('');
                    }}
                  >
                    Already have an account? Login
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !regName || !regEmail || !regPassword}
                  className={`lm-submit-btn ${
                    regName && regEmail && regPassword ? 'active' : 'inactive'
                  }`}
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
