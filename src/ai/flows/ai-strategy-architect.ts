'use server';
/**
 * @fileOverview This file implements an AI-powered strategic brief generator.
 *
 * - aiStrategyArchitect - A function that generates preliminary content optimization or SEO brief recommendations.
 * - AIStrategyArchitectInput - The input type for the aiStrategyArchitect function.
 * - AIStrategyArchitectOutput - The return type for the aiStrategyArchitect function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIStrategyArchitectInputSchema = z
  .object({
    topic: z
      .string()
      .optional()
      .describe(
        'A topic for which to generate content optimization or SEO brief recommendations.'
      ),
    url: z
      .string()
      .url()
      .optional()
      .describe(
        'A URL for which to generate content optimization or SEO brief recommendations.'
      ),
  })
  .refine((data) => data.topic || data.url, {
    message: 'Either topic or URL must be provided.',
  });
export type AIStrategyArchitectInput = z.infer<
  typeof AIStrategyArchitectInputSchema
>;

const AIStrategyArchitectOutputSchema = z.object({
  briefTitle: z
    .string()
    .describe('A concise and impactful title for the generated strategic brief.'),
  summary: z
    .string()
    .describe(
      'A high-level summary of the strategic approach and findings, emphasizing Karen\'s expertise.'
    ),
  seoRecommendations: z
    .array(z.string())
    .describe('Specific, actionable SEO recommendations, framed from a technical and business perspective.'),
  contentOptimizationTips: z
    .array(z.string())
    .describe('Specific, actionable content optimization tips, linking design and technical viability.'),
  strategicInsights: z
    .array(z.string())
    .describe('Advanced strategic insights demonstrating deep understanding of tech, product design, and market trends.'),
  disclaimer: z
    .string()
    .describe(
      'A clear disclaimer stating that this is a preliminary, AI-generated analysis and that a full consultation with Karen Sandoval provides deeper, tailored, human-led strategic insights.'
    ),
});
export type AIStrategyArchitectOutput = z.infer<
  typeof AIStrategyArchitectOutputSchema
>;

export async function aiStrategyArchitect(
  input: AIStrategyArchitectInput
): Promise<AIStrategyArchitectOutput> {
  return aiStrategyArchitectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStrategyArchitectPrompt',
  input: { schema: AIStrategyArchitectInputSchema },
  output: { schema: AIStrategyArchitectOutputSchema },
  prompt: `You are Karen Sandoval, a Senior Content Strategist specialized in Tech and Product Design. You have over 10 years of experience (since 2014) and your unique value proposition is being the perfect bridge between high-fidelity design, technical viability (HTML/CSS/JS), and business strategy (SEO and Conversion). You optimize scalable digital ecosystems.\n\nYour goal is to provide preliminary content optimization and SEO brief recommendations that showcase your strategic prowess, understanding of code, and business acumen. The tone must be professional, authoritative, sophisticated, and results-oriented. Avoid common phrases; make the client feel that you are a secure investment because you understand the code and the business.\n\nBased on the {{#if url}}provided URL{{else}}topic{{/if}}, generate a strategic brief with actionable recommendations.\n\n{{#if url}}\n**IMPORTANT:** You do not have real-time access to browse the web or perform live audits. Your analysis of the provided URL '{{{url}}}' must be a *simulated* one, based on general best practices for a website with a similar structure or purpose. Do not invent specific content details. Frame your recommendations as if you were preparing for a deeper, comprehensive audit, highlighting areas Karen would typically investigate.\n{{/if}}\n\n{{#if topic}}\nTopic for analysis: {{{topic}}}\n{{else}}\nURL for simulated analysis: {{{url}}}\n{{/if}}\n\nPlease provide the brief in the following structured JSON format, ensuring each section contains valuable, distinct insights that reflect a senior strategist's perspective:`,
});

const aiStrategyArchitectFlow = ai.defineFlow(
  {
    name: 'aiStrategyArchitectFlow',
    inputSchema: AIStrategyArchitectInputSchema,
    outputSchema: AIStrategyArchitectOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
