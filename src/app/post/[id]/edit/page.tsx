"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { toast } from "sonner"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"

const formSchema = z.object({
  username: z.string().min(1),
  content: z.string().min(1),
  title: z.string().min(1)
})

function upper(input: string) {
  return input[0].toUpperCase() + input.slice(1)
}

export default function PostCreate() {
  const id = +(useParams()?.id || '0')
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      content: '',
      title: ''
    }
  })
  // fetch form data if in edit mode
  useEffect(() => {
    const fetchIfAny = async () => {
      if (id) {
        document.title = 'Edit'
        const data = await (await fetch(`/api/post/${id}`)).json()
        form.reset(data)
      } else {
        document.title = 'New'
      }
    }
    fetchIfAny()
  }, [])

  async function onSubmit(value: z.infer<typeof formSchema>) {
    try {
      // create mode
      if (!id) {
        const { title, content, username } = value
        await fetch(`/api/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            title,
            content
          }),
          cache: 'no-store' // must in SSR
        })
        toast.success('Post is successfully added')
      // edit mode
      } else {
        const { title, content, username } = value
        await fetch(`/api/post`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            title,
            content,
            id
          }),
          cache: 'no-store' // must in SSR
        })
        toast.success('Post is successfully editted')
      }
      router.push('/')
    } catch (e) {
      console.error(e)
      toast.error('Oops...')
    }
  }

  const fields = ['username', 'title', 'content'] as const
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {fields.map((fieldName) => 
            <FormField
              key={fieldName}
              control={form.control}
              name={fieldName}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{upper(fieldName)}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
