import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../api/axiosInstance';
import { Loader } from 'lucide-react';

const Signup = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [storeRoleId, setStoreRoleId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const selectedRoleId = watch('role_id');
  const selectedRole = roles.find((r) => r.id.toString() === selectedRoleId?.toString());

  useEffect(() => {
    const fetchRoles = async () => {
      const setFallbackRoles = () => {
        const fallbackData = [
          { id: 1, name: 'Müşteri', code: 'customer' },
          { id: 2, name: 'Mağaza', code: 'store' },
          { id: 3, name: 'Yönetici', code: 'admin' },
        ];
        setRoles(fallbackData);
        setValue('role_id', 1);
        setStoreRoleId(2);
      };

      const setRoleDefaults = (rolesData) => {
        const customerRole = rolesData.find((r) => r.code === 'customer' || r.name === 'Müşteri');
        const storeRole = rolesData.find((r) => r.code === 'store' || r.name === 'Mağaza');

        if (customerRole) {
          setValue('role_id', customerRole.id);
        }
        if (storeRole) {
          setStoreRoleId(storeRole.id);
        }
      };

      try {
        const response = await api.get('/roles');
        const rolesData = response.data;
        
        if (rolesData && rolesData.length > 0) {
          setRoles(rolesData);
          setRoleDefaults(rolesData);
        } else {
          setFallbackRoles();
        }
      } catch (error) {
        console.warn('API üzerinden roller alınamadı, statik roller kullanılıyor:', error);
        setFallbackRoles();
      }
    };

    fetchRoles();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (Number(data.role_id) === storeRoleId) {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      await api.post('/signup', payload);
      toast.success('Hesabınızı etkinleştirmek için e-postanıza gelen bağlantıya tıklamanız gerekmektedir!');
      history.goBack();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Kayıt işlemi başarısız oldu!';
      toast.error(`Hata: ${errorMsg}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#252B42]">Yeni Hesap Oluştur</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Ad */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
              <input
                type="text"
                {...register('name', {
                  required: 'Ad alanı zorunludur',
                  minLength: { value: 3, message: 'Ad en az 3 karakter olmalıdır' },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* E-posta */}
            <div>
              <label className="block text-sm font-medium text-gray-700">E-posta</label>
              <input
                type="email"
                {...register('email', {
                  required: 'E-posta alanı zorunludur',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Geçersiz e-posta adresi',
                  },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Şifre */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Şifre</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Şifre alanı zorunludur',
                  minLength: { value: 8, message: 'Şifre en az 8 karakter olmalıdır' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    message: 'Şifre büyük harf, küçük harf, rakam ve özel karakter içermelidir',
                  },
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Şifre Tekrar */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Şifre Tekrar</label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Lütfen şifrenizi onaylayın',
                  validate: (value) => value === watch('password') || 'Şifreler eşleşmiyor',
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Rol Seçimi */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Rol</label>
              <select
                {...register('role_id', { required: 'Rol seçimi zorunludur' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-blue-500 focus:border-blue-500"
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Mağaza Bilgileri (Koşullu) */}
            {selectedRole && selectedRole.code === 'store' && (
              <div className="space-y-4 border-t pt-4 border-gray-200">
                <h3 className="text-md font-medium text-[#252B42]">Mağaza Bilgileri</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mağaza Adı</label>
                  <input
                    type="text"
                    {...register('store_name', {
                      required: 'Mağaza adı zorunludur',
                      minLength: { value: 3, message: 'Mağaza adı en az 3 karakter olmalıdır' },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mağaza Telefonu</label>
                  <input
                    type="text"
                    placeholder="05XXXXXXXXX"
                    {...register('store_phone', {
                      required: 'Telefon numarası zorunludur',
                      pattern: {
                        value: /^(\+90|0)?5\d{9}$/,
                        message: 'Geçerli bir Türkiye telefon numarası giriniz',
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Vergi Numarası (TXXXXVXXXXXX)</label>
                  <input
                    type="text"
                    placeholder="T1234V567890"
                    {...register('store_tax_no', {
                      required: 'Vergi numarası zorunludur',
                      pattern: {
                        value: /^T\d{4}V\d{6}$/,
                        message: 'TXXXXVXXXXXX formatına uygun olmalıdır (X rakamdır)',
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Banka Hesabı (IBAN)</label>
                  <input
                    type="text"
                    placeholder="TR..."
                    {...register('store_bank_account', {
                      required: 'Banka hesabı (IBAN) zorunludur',
                      pattern: {
                        value: /^TR\d{2}\d{5}[0-9A-Z]{17}$/,
                        message: 'Geçerli bir Türk IBAN adresi giriniz',
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

            {/* Gönder Butonu */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none disabled:opacity-50 items-center"
              >
                {isSubmitting ? <Loader className="animate-spin h-5 w-5 text-white" /> : 'Kayıt Ol'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;