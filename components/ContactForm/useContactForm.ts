import { useRouter } from "next/router";
import { useState, FormEventHandler } from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(1),
});

type FormValues = z.infer<typeof formSchema>;

export const useContactForm = () => {
  const { push } = useRouter();
  const [formStateErrors, setFormStateErrors] = useState<Partial<FormValues>>(
    {}
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);

    const validation = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (validation.success) {
      const params = new URLSearchParams();

      Object.entries(validation.data).map(([key, value]) => {
        params.set(key, value);
      });

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })
        .then((x) => {
          push(form.action);
        })
        .catch((error) => {
          // TODO handle error
          alert(error);
        });
    } else {
      const { fieldErrors } = validation.error.formErrors;
      setFormStateErrors({
        email: fieldErrors.email?.toString(),
        message: fieldErrors.message?.toString(),
        name: fieldErrors.name?.toString(),
      });
    }
  };

  return { errors: formStateErrors, onSubmit };
};
