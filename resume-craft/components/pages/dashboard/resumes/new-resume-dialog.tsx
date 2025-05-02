"use client";
import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/input/field";
import { log } from "console";
import { use, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
type FormData = {
  name: string;
};
export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>();
  const [name, setName] = useState("");
  const { control, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog
      {...props}
      title="Criando um novo currículo"
      description="Escolha um modelo para começar a criar seu currículo."
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
            <InputField label="titulo" name="title" required />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};
