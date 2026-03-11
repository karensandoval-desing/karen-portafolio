
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Search, Globe, ChevronRight } from "lucide-react";
import { aiStrategyArchitect, type AIStrategyArchitectOutput } from "@/ai/flows/ai-strategy-architect";

const formSchema = z.object({
  query: z.string().min(3, {
    message: "Por favor, ingresa un tema o una URL válida.",
  }),
});

export function StrategyArchitect() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIStrategyArchitectOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const isUrl = values.query.startsWith("http");
      const data = await aiStrategyArchitect({
        [isUrl ? "url" : "topic"]: values.query,
      });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-architect" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent mb-4">
              <Sparkles className="w-3 h-3" /> Powered by GenAI
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">AI Strategy Architect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Obtén una muestra de mi visión estratégica. Ingresa un tema o URL para generar recomendaciones preliminares de optimización y SEO.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            <Card className="glass-card border-white/10 h-fit">
              <CardHeader>
                <CardTitle className="text-xl">Analizar</CardTitle>
                <CardDescription>
                  Genera un brief estratégico instantáneo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="query"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Input 
                                placeholder="Escribe un tema o URL..." 
                                {...field} 
                                className="bg-secondary/50 border-white/5 pl-10"
                              />
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-background font-bold" disabled={loading}>
                      {loading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...</>
                      ) : (
                        "Arquitectar Estrategia"
                      )}
                    </Button>
                  </form>
                </Form>
                <p className="text-[10px] text-muted-foreground mt-4 text-center">
                  *Este análisis es preliminar y basado en IA para demostrar capacidades estratégicas.
                </p>
              </CardContent>
            </Card>

            <div className="min-h-[400px]">
              {result ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="glass-card p-8 rounded-2xl border-accent/20">
                    <h4 className="text-3xl font-bold text-gradient mb-4">{result.briefTitle}</h4>
                    <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{result.summary}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-accent font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                          <Globe className="w-4 h-4" /> SEO & Arquitectura
                        </h5>
                        <ul className="space-y-3">
                          {result.seoRecommendations.map((rec, i) => (
                            <li key={i} className="text-sm flex gap-3">
                              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-accent font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" /> Optimización de Contenido
                        </h5>
                        <ul className="space-y-3">
                          {result.contentOptimizationTips.map((tip, i) => (
                            <li key={i} className="text-sm flex gap-3">
                              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5">
                      <h5 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Strategic Insights</h5>
                      <div className="space-y-3">
                        {result.strategicInsights.map((insight, i) => (
                          <p key={i} className="text-sm italic text-muted-foreground">"{insight}"</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-[11px] text-muted-foreground leading-tight italic">
                        {result.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-muted-foreground p-12 text-center">
                  {loading ? (
                    <Loader2 className="w-12 h-12 animate-spin mb-4 text-primary" />
                  ) : (
                    <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                  )}
                  <p className="text-lg">Ingresa un tema o URL para visualizar el análisis estratégico.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
