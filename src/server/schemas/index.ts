import { z } from 'zod'
import {
  FOLLOW_AND_UNFOLLOW_CATEGORY_SCHEMA_MESSAGES,
  FOLLOW_AND_UNFOLLOW_USER_SCHEMA_MESSAGES,
  CREATE_ARTICLE_SCHEMA_MESSAGES
} from '@server/libs/constants'

export const followAndUnfollowCategorySchema = z.object({
  categoryName: z
    .string({ required_error: FOLLOW_AND_UNFOLLOW_CATEGORY_SCHEMA_MESSAGES.CATEGORY_NAME_REQUIRED })
    .min(3, { message: FOLLOW_AND_UNFOLLOW_CATEGORY_SCHEMA_MESSAGES.CATEGORY_NAME_LENGTH }),
  userEmail: z
    .string({ required_error: FOLLOW_AND_UNFOLLOW_CATEGORY_SCHEMA_MESSAGES.USER_EMAIL_REQUIRED })
    .email({ message: FOLLOW_AND_UNFOLLOW_CATEGORY_SCHEMA_MESSAGES.USER_EMAIL_LENGTH })
})

export const followAndUnfollowUserSchema = z.object({
  id: z.string({ required_error: FOLLOW_AND_UNFOLLOW_USER_SCHEMA_MESSAGES.ID_REQUIRED })
})

export const createArticleSchema = z.object({
  title: z.string({ required_error: CREATE_ARTICLE_SCHEMA_MESSAGES.TITLE_REQUIRED }),
  content: z.string({ required_error: CREATE_ARTICLE_SCHEMA_MESSAGES.CONTENT_REQUIRED }),
  description: z.string({ required_error: CREATE_ARTICLE_SCHEMA_MESSAGES.DESCRIPTION_REQUIRED }),
  banner: z.string().optional(),
  categories: z
    .array(z.string())
    .min(1, { message: CREATE_ARTICLE_SCHEMA_MESSAGES.CATEGORIES_MIN_LENGTH })
    .max(5, { message: CREATE_ARTICLE_SCHEMA_MESSAGES.CATEGORIES_MAX_LENGTH }),
  userId: z.string({ required_error: CREATE_ARTICLE_SCHEMA_MESSAGES.USER_ID_REQUIRED })
})
