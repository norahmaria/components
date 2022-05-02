import React, { useState } from 'react'
import { onSelectionChangeArgs } from '../components/Select/Select.types'

import { CustomColor } from '../components/Tag/Tag.types'
import getRandomColor from './getRandomColor'

const useForm = (initial: any) => {
  const [form, setForm] = useState(initial)

  const onSelectionChange =
    (string?: boolean) => (e: onSelectionChangeArgs) => {
      return setForm(form => ({
        ...form,
        [e.id]: string ? e.selected[0] : e.selected,
      }))
    }

  const onAddTag =
    (
      contentPropertyName: string,
      color?:
        | 'primary'
        | 'neutral'
        | 'success'
        | 'warning'
        | 'error'
        | CustomColor
    ) =>
    ({ value, id }: { value: string; id: string }) => {
      return setForm(form => ({
        ...form,
        [id]: [
          ...form[id],
          {
            [contentPropertyName]: value,
            color: color || getRandomColor(),
          },
        ],
      }))
    }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      case 'text':
        const characterLimit = parseFloat(
          e.target.getAttribute('data-character-limit')
        )

        if (characterLimit) {
          return setForm(form => {
            const update =
              characterLimit && e.target.value.length > characterLimit
                ? form[e.target.id]
                : characterLimit
                ? e.target.value.substring(0, characterLimit)
                : e.target.value

            return {
              ...form,
              [e.target.id]: update,
            }
          })
        } else {
          return setForm(form => ({
            ...form,
            [e.target.id]: e.target.value,
          }))
        }

      default:
        return setForm(form => ({
          ...form,
          [e.target.id]: e.target.value,
        }))
    }
  }

  return {
    form,
    setForm,
    onChange,
    onSelectionChange,
    onAddTag,
  }
}

export default useForm
