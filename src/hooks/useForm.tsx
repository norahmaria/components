import React, { useEffect, useState } from 'react'

const useForm = (initial: any) => {
  const [form, setForm] = useState(initial)

  const onChange = (
    value?: string | number | (string | number)[] | boolean,
    e?: any
  ) => {
    switch (e.target.type) {
      case 'radio':
        return setForm(form => ({
          ...form,
          [e.target.name]: e.target.value,
        }))

      case 'range':
        return setForm(form => ({
          ...form,
          [e.target.id]: parseFloat(e.target.value),
        }))

      case 'checkbox':
        return setForm(form => ({
          ...form,
          [e.target.id]: e.target.checked,
        }))

      default:
        return setForm(form => ({
          ...form,
          [e.target.id]: e.target.value,
        }))
    }
  }

  useEffect(() => {
    console.log(form)
  }, [form])

  return {
    form,
    setForm,
    onChange,
  }
}

export default useForm
