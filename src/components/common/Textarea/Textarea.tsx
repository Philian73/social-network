import { FC } from 'react'
import { WrappedFieldProps } from 'redux-form/lib/Field'

import cls from './Textarea.module.css'

export const Textarea: FC<WrappedFieldProps> = ({ input, meta, ...rest }) => {
   const hasError = !meta.pristine && meta.error
   const hasWarn = !meta.pristine && meta.warning

   const textareaStyles = cls.formControl + (hasError ? ' ' + cls.error : '')

   return (
      <div className={textareaStyles}>
         <textarea {...input} {...rest} />
         {(hasError || hasWarn) && <span>{meta.warning}</span>}
      </div>
   )
}