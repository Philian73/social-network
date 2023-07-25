import { FC } from 'react'
import { WrappedFieldProps } from 'redux-form/lib/Field'

import cls from './Input.module.css'

export const Input: FC<WrappedFieldProps> = ({ input, meta, ...rest }) => {
   const hasError = !meta.touched && meta.error

   const inputStyles = cls.formControl + (hasError ? ' ' + cls.error : '')

   return (
      <div className={inputStyles}>
         <input {...input} {...rest} />
         {hasError && <span>{meta.error}</span>}
      </div>
   )
}