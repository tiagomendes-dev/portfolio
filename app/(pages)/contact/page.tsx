"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import { useToast } from "@/app/_components/ui/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("api/contact", data);
      toast({ description: "Mensagem enviada com sucesso!" });
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
      });
    }
  };

  return (
    <div className="m-2  rounded-lg bg-white px-5 py-16 shadow-sm">
      <main className="flex flex-col items-center justify-center py-12 md:py-24">
        <div className="container max-w-xl px-4 md:px-0">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Contato
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Tem alguma dúvida ou quer trabalhar junto? Preencha o formulário
              abaixo e entrarei em contato com você o mais breve possível.
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  placeholder="Nome"
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  placeholder="E-mail"
                  type="email"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                className="min-h-[120px] resize-none"
                id="message"
                placeholder="Digite sua mensagem aqui..."
                {...register("message")}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Enviar
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
