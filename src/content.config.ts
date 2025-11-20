import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			date: z.date(),
			tags: z.array(z.string()),
			image: image(),
			imageAlt: z.string(),
		}),
});

const servicesCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/services',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cardDescription: z.string().optional(),
      subtitle: z.string(),
      image: image(),
      imageAlt: z.string(),
      hightlights: z.array(
        z.object({
          featName: z.string(),
          featBody: z.string(),
        }),
      ),
      benefitsTitle: z.string(),
      benefitsTagline: z.string(),
      benefits: z.array(
        z.object({
          benefitName: z.string(),
          benefitBody: z.string(),
        }),
      ),
      prices: z.array(
        z.object({
          duration: z.string(),
          price: z.string(),
        }),
      ).optional(),
    }),
});

const faqCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    active: z.boolean().optional().default(false),
    order: z.number().optional(),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.enum(['founder', 'therapist']),
    photo: image().optional(),
    occupation: z.string(),
    since: z.string(),
    where: z.string().optional(),
    bio: z.string(),
    // order: z.number().optional(),
  }),
});

export const collections = {
	blog: blogsCollection,
  services: servicesCollection,
  faq: faqCollection,
  team: teamCollection,
};

