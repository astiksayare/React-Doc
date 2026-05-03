
import * as Type from '@/app/types';
import { useForm } from 'react-hook-form';

export const Registration = () => {

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<Type.RegistrationForm>();

    const Submit = (data: Type.RegistrationForm) => console.log(data, '------ form data -----');

    return (
        <form
        className="w-full flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit(Submit)}
        >
           <h1
            className="font-bold text-blue-500 text-2xl mt-4 underline"
           >User Registration</h1> 

           <div
           className='flex flex-col gap-1'
           >
             {/* Username Input Field */}
             <label htmlFor="username" className='font-bold'>Username</label>
             <input 
                type='text'
                id='username'
                placeholder='Enter the username...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('username', {
                    required: 'Username is required',
                    pattern: {
                        value: /^[a-zA-Z0-9_]+$/,
                        message: 'Invalid username'
                    }
                })}
             />
             {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
           </div> 

           <div
           className='flex flex-col gap-1'
           >
             {/* FirstName Input Field */}
             <label htmlFor="firstName" className='font-bold'>First Name</label>
             <input 
                type='text'
                id='firstName'
                placeholder='Enter the first name...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('firstName', {
                    required: 'First Name is required',
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Invalid first name'
                    }
                })}
             />
             {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
           </div> 

           <div
           className='flex flex-col gap-1'
           >
             {/* LastName Input Field */}
             <label htmlFor="lastName" className='font-bold'>Last Name</label>
             <input 
                type='text'
                id='lastName'
                placeholder='Enter the last name...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('lastName', {
                    required: 'Last Name is required',
                    pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Invalid last name'
                    }
                })}
             />
             {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
           </div> 

            <div
           className='flex flex-col gap-1'
           >
             {/* Email Input Field */}
             <label htmlFor="email" className='font-bold'>Email</label>
             <input 
                type='email'
                id='email'
                placeholder='Enter the email...'

                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^(?!\s*$)[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                    }
                })}
             />
             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
           </div> 

            <div
           className='flex flex-col gap-1'
           >
             {/* Mobile Input Field */}
             <label htmlFor="mobile" className='font-bold'>Mobile</label>
             <input 
                type='text'
                id='mobile'
                placeholder='Enter the mobile number...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('mobile', {
                    required: 'Mobile is required',
                    minLength: { 
                        value: 10, 
                        message: 'Mobile number must be at least 10 digits'
                    },
                    pattern: {
                        value: /^(?!\s*$)[6-9]\d{9}$/,
                        message: 'Invalid mobile number'
                    }
                })}
             />
             {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
           </div> 

           <div
           className='flex flex-col gap-1'
           >
             {/* Address Input Field */}
             <label htmlFor="address" className='font-bold'>Address</label>
             <input 
                type='text'
                id='address'
                placeholder='Enter the address...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('address', {required: false})}
             />
             {errors.address && <p className='text-red-500'>{errors.address.message}</p>}
           </div> 

           <div
           className='flex flex-col gap-1'
           >
             {/* Password Input Field */}
             <label htmlFor="password" className='font-bold'>Password</label>
             <input 
                type='password'
                id='password'
                placeholder='Enter the password...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('password', {required: 'Password is required'})}
             />
             {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
           </div> 

            <div
           className='flex flex-col gap-1'
           >
             {/* Confirm Password Input Field */}
             <label htmlFor="confirmPassword" className='font-bold'>Confirm Password</label>
             <input 
                type='password'
                id='confirmPassword'
                placeholder='Confirm the password...'
                className='border-2 border-slate-700 rounded-md p-1 text-purple-800'
                {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value, formValues) => value === formValues.password || 'Passwords do not match'
                })}
             />
             {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
           </div> 


           <div>
                <button
                className='px-5 py-1 text-white font-bold bg-blue-500 rounded-lg cursor-pointer 
                hover:bg-blue-600
                active:bg-green-400
                '
                type='submit'
                >{isSubmitting ? 'Submitting...' : 'Submit'}</button>
           </div>   
        </form>
    )
}