'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import './login.css';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/profile';

  const { login, loginWithMobile, demoUser } = useAuth();

  // Mode: 'otp' | 'password'
  const [mode, setMode] = useState('otp');

  // Form states
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [agreed, setAgreed] = useState(true);

  // Password fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Status & Errors
  const [error, setError] = useState('');
  const [infoMsg, setInfoMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resend timer
  React.useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

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
    setTimeout(() => setOtp('1234'), 600);
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
      router.push(redirectPath);
    } catch (err) {
      setError(err.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email or mobile number.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    try {
      setIsSubmitting(true);
      await login(email, password);
      router.push(redirectPath);
    } catch (err) {
      setError(err.message || 'Failed to login. Please check credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoFill = () => {
    setEmail(demoUser.email);
    setPassword('Demo@1234');
    setError('');
  };

  const isMobileValid = mobile.length === 10;
  const isOtpValid = otp.length === 4;

  return (
    <div className="auth-page-container">
      <div className="auth-split-card">
        {/* Left Side: Banner Image */}
        <div className="auth-split-left">
          <img
            src="/images/auth/login-page.png"
            alt="Make Your Home a Better Place"
            className="auth-banner-img"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="auth-split-right">
          <div className="auth-header">
            <h1 className="auth-title">Login / Sign Up</h1>
          </div>

          {error && (
            <div className="auth-error-banner" role="alert">
              <span className="error-icon">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {infoMsg && (
            <div className="auth-info-banner">
              <span className="info-icon">✓</span>
              <span>{infoMsg}</span>
            </div>
          )}

          {/* MODE 1: OTP Login (Default) */}
          {mode === 'otp' && (
            <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="auth-form">
              <div className="form-group">
                <label htmlFor="login-mobile">Mobile Number</label>
                <input
                  id="login-mobile"
                  type="tel"
                  placeholder="Enter 10-digit Mobile Number"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value.replace(/\D/g, '').slice(0, 10));
                    setError('');
                  }}
                  maxLength={10}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-otp">OTP</label>
                <input
                  id="login-otp"
                  type="text"
                  placeholder="Enter 4-digit OTP to login"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  maxLength={4}
                  disabled={!otpSent}
                  className={`form-input ${!otpSent ? 'disabled' : ''}`}
                />
                {otpSent && resendTimer > 0 && (
                  <span className="resend-countdown">Resend OTP in {resendTimer}s</span>
                )}
                {otpSent && resendTimer === 0 && (
                  <button type="button" className="btn-resend-otp" onClick={handleSendOtp}>
                    Resend OTP
                  </button>
                )}
              </div>

              <label className="terms-checkbox-row">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="auth-checkbox"
                />
                <span className="terms-text">
                  By continuing, I agree to the{' '}
                  <span className="text-orange">Terms of Service</span> and{' '}
                  <span className="text-orange">Privacy &amp; Legal Policy</span>
                </span>
              </label>

              <div className="switch-row-right">
                <button
                  type="button"
                  className="link-switch-auth"
                  onClick={() => {
                    setMode('password');
                    setError('');
                    setInfoMsg('');
                  }}
                >
                  Login with Password
                </button>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || (!otpSent && !isMobileValid) || (otpSent && !isOtpValid)}
                className={`btn-auth-primary ${
                  (otpSent ? isOtpValid : isMobileValid) ? 'active' : 'inactive'
                }`}
              >
                {isSubmitting
                  ? 'Processing...'
                  : otpSent
                  ? 'Verify OTP & Login'
                  : 'Send OTP'}
              </button>
            </form>
          )}

          {/* MODE 2: Password Login */}
          {mode === 'password' && (
            <form onSubmit={handlePasswordSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="login-email">Email or Mobile Number</label>
                <input
                  id="login-email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email or Mobile"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="form-input"
                  required
                />
              </div>

              <div className="switch-row-split">
                <button
                  type="button"
                  className="link-switch-auth"
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
                  className="link-forgot-pwd"
                  onClick={() => setInfoMsg('Password reset instructions sent to your email.')}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className={`btn-auth-primary ${email && password ? 'active' : 'inactive'}`}
                disabled={isSubmitting || !email.trim() || !password}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="demo-login-box">
                <button type="button" onClick={handleDemoFill} className="btn-demo-fill">
                  ⚡ Fill Demo Credentials ({demoUser.email})
                </button>
              </div>
            </form>
          )}

          <div className="auth-footer">
            <p>
              Don&apos;t have an account?{' '}
              <Link
                href={`/register?redirect=${encodeURIComponent(redirectPath)}`}
                className="auth-switch-link"
              >
                Register as a New User
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="auth-loading">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
