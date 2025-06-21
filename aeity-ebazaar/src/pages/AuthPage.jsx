import { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        {isLogin ? 'Login to AEITY' : 'Create Your Account'}
      </h2>

      <div className="bg-white p-6 shadow rounded space-y-4">
        {isLogin ? <LoginForm /> : <SignupForm />}
        <p className="text-sm text-center">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button onClick={() => setIsLogin(false)} className="text-orange-600 underline">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setIsLogin(true)} className="text-orange-600 underline">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
