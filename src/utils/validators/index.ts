export const requiredField = (value: string) => !value ? 'Field is required' : undefined

export const maxLength = (num: number) => {
   return (value: string) => value && value.length > num ? `Must be no more than ${num} characters` : undefined
}

export const minLength = (num: number) => {
   return (value: string) => value && value.length < num ? `Must be at least ${num} characters long` : undefined
}

export const isValidEmail = (email: string) => {
   return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ? 'Invalid email address' : undefined
}