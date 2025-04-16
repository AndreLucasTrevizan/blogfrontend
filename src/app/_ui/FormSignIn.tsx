"use client";

import { useState } from "react";
import { Button, Field, Fieldset, Input, Label, Legend } from "@headlessui/react";
import { ClipLoader } from "react-spinners";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorHandler } from "../_helper/Error";
import { api } from "../_api";
import ErrorMessage from "./ErrorMessage";
import { redirect } from "next/navigation";
import { handleUserSignIn } from "../sign_in/actions";

interface SignInData {
  email: string;
  password: string;
}

const initialState = {
  message: ''
}

export default function FormSignIn() {
  const schema = yup.object().shape({
    email: yup.string().email('Entre com um endereço de e-mail valido').required('Preencha o campo e-mail'),
    password: yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').max(32, 'A senha deve conter até 32 caracteres').required(),
  });
  
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiMessage, setApiMessage] = useState<string>('');

  const signIn: SubmitHandler<SignInData> = async (values) => {
    setIsLoading(true);

    try {
      const response = await api.post("/sign_in", values, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      const {
        data
      } = response;
    } catch (error) {
      const errorHandler = new ErrorHandler(error);
      
      setApiMessage(errorHandler.message);
    } finally {
      setIsLoading(false);
    }

    redirect('/');
  }

  if (isLoading) {
    return (
      <div
        className="bg-white rounded-xl flex items-center justify-center w-2/3 p-6"
      >
        <ClipLoader
          color="#000"
          loading={isLoading}
          size={80}
          aria-label="Loading Spinner"
        />
      </div>
    );
  } else {
    return (
      <Fieldset
        as='form'
        onSubmit={handleSubmit(handleUserSignIn)}
        className="space-y-6 rounded-xl bg-white p-6 sm:p-10 w-2/3"
      >
        <Legend className="text-base/7 font-semibold">Acessar Sistema</Legend>
        <Field>
          <Label className="text-sm6 font-medium">E-mail</Label>
          <Input
            type="email"
            className='mt-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6'
            placeholder="Digite seu e-mail"
            {...register('email')}
          />
          {errors.email && <small className="text-red-500">{errors.email.message}</small>}
        </Field>
        <Field>
          <Label className="text-sm6 font-medium">Senha</Label>
          <Input
            type="password"
            className='mt-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6'
            placeholder="Digite sua senha"
            {...register('password')}
          />
          {errors.password && <small className="text-red-500">{errors.password.message}</small>}
        </Field>
        <Button
          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data- [hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          type="submit"
        >
          Acessar
        </Button>
        <ErrorMessage message={apiMessage} />
      </Fieldset>
    );
  }
}