import {
  defineRule,
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage,
  configure,
} from 'vee-validate'
import * as rules from '@vee-validate/rules'
// import { required, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

// defineRule('required', required)
// defineRule('email', email)
// Optionally localize validation messages
// localize({
//   en: {
//     messages: {
//       required: 'This field is required',
//       email: 'This field must be a valid email',
//     },
//   },
// });
// extend('required', {
//   ...required,
//   message: 'This field is required',
// });

// extend('email', {
//   ...email,
//   message: 'This field must be a valid email',
// });

// Define rules globally
Object.keys(rules).forEach((rule) => {
  if (typeof rules[rule] === 'function') {
    defineRule(rule, rules[rule])
  } else if (rule === 'all') {
    // Handle the 'all' rule separately if needed
  } else {
    console.error(`Invalid rule type for ${rule}`)
  }
})

configure({
  generateMessage: localize('en', {
    messages: {
      required: 'This field is required',
      email: 'This field must be a valid email',
    },
  }),
  validateOnInput: true,
})

export default {
  install(app) {
    // Register components globally
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
  },
}
