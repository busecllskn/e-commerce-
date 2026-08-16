import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [formError, setFormError] = useState('');

  // Seçilen rolü izleme (Store alanlarını dinamik açmak için)
  const selectedRoleId = watch('role_id');
  const selectedRole = roles.find((r) => r.id.toString() === selectedRoleId?.toString());

  // /roles endpoint'inden rolleri çekme ve Customer'ı varsayılan seçme
  useEffect(() => {
    axiosInstance
      .get('/roles')
      .then((res) => {
        setRoles(res.data);
        const customerRole = res.data.find(
          (r) => r.code === 'customer' || r.name.toLowerCase() === 'customer'
        );
        if (customerRole) {
          setValue('role_id', customerRole.id);
        } else if (res.data.length > 0) {
          setValue('role_id', res.data[0].id);
        }
      })
      .catch((err) => {
        console.error('Roller yüklenirken hata oluştu:', err);
      });
  }, [setValue]);

  const onSubmit = async (data) => {
    setFormError('');

    // Backend veri formatına uygun payload oluşturma
    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: Number(data.role_id),
    };

    // Eğer rol store seçildiyse store objesini ekleme
    if (selectedRole && selectedRole.code === 'store') {
      payload.store = {
        name: data.store_name,
        phone: data.store_phone,
        tax_no: data.store_tax_no,
        bank_account: data.store_bank_account,
      };
    }

    try {
      await axiosInstance.post('/signup', payload);
      // Başarılı olduğunda önceki sayfaya yönlendir ve uyarı ver
      history.goBack();
      alert('You need to click link in email to activate your account!');
    } catch (err) {
      // Hata durumunda form sayfasında kal ve kullanıcıyı bilgilendir
      setFormError(
        err.response?.data?.message || 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#252B42]">Create a new account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
          {formError && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4 text-red-700 text-sm">
              {formError}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                {...register('name', {
                  required: 'Name field is required',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    message: 'Must include numbers, lowercase, uppercase and special chars',
                  },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Password Confirmation */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) => value === watch('password') || 'The passwords do not match',
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                {...register('role_id', { required: 'Role is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Store Specific Fields (Conditional) */}
            {selectedRole && selectedRole.code === 'store' && (
              <div className="space-y-4 border-t pt-4 border-gray-200">
                <h3 className="text-md font-medium text-[#252B42]">Store Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Name</label>
                  <input
                    type="text"
                    {...register('store_name', {
                      required: 'Store name is required',
                      minLength: { value: 3, message: 'Store name must be at least 3 characters' },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Phone (Türkiye)</label>
                  <input
                    type="text"
                    placeholder="05XXXXXXXXX"
                    {...register('store_phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^(\+90|0)?5\d{9}$/,
                        message: 'Enter a valid Türkiye phone number',
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Tax ID (TXXXXVXXXXXX)</label>
                  <input
                    type="text"
                    placeholder="T1234V567890"
                    {...register('store_tax_no', {
                      required: 'Tax ID is required',
                      pattern: {
                        value: /^T\d{4}V\d{6}$/,
                        message: 'Must match pattern TXXXXVXXXXXX (X are numbers)',
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Store Bank Account (IBAN)</label>
                  <input
                    type="text"
                    placeholder="TR..."
                    {...register('store_bank_account', {
                      required: 'Bank account is required',
                      pattern: {
                        value: /^TR\d{2}\d{5}[0-9A-Z]{17}$/,
                        message: 'Enter a valid Turkish IBAN address',
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_bank_account && (
                    <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button with Spinner & Disabled State */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none disabled:opacity-50"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;