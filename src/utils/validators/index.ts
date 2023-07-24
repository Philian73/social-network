export const requiredField = (value: string) => !value ? 'Field is required' : undefined

export const maxLength = (num: number) => {
   return (value: string) => value && value.length > num ? `Must be no more than ${num} characters` : undefined
}

export const minLength = (num: number) => {
   return (value: string) => value && value.length < num ? `Must be at least ${num} characters long` : undefined
}
