'use client'

import { IconX } from '@tabler/icons-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/client/components/ui/dialog'
import { Badge } from '../ui/badge'
import { Label } from '@/client/components/ui/label'
import { Button } from '@/client/components/ui/button'
import { useArticleStore } from '@/client/stores/publishArticleStore'
import { SelectCategory } from '@/client/components/new-story/select-category'
import { ImgsCarousel } from './imgs-carousel'

export function PublishArticle({ onClick }: { onClick: any }) {
  const { articleContent, banner, categories, removeCategory } = useArticleStore(state => state)

  const title = articleContent?.split('\n')[0]
  const description = articleContent?.split('\n')[1]
  let imgSrc
  if (banner && banner.length > 0) {
    imgSrc = banner[0]?.src
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={onClick}>Publicar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Previsualización de tu historia</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          De la forma que se previsualiza será como aparecera en los lugares públicos de PagePal,
          como lo es la página de inicio o en tu perfil.
        </DialogDescription>
        <ImgsCarousel imgSrc={imgSrc} />

        {!imgSrc && (
          <span className='text-[12px] text-muted-foreground'>
            Esta imagen se seleccionara en caso de no utilizar alguna imagen en tu historia.
          </span>
        )}
        <Label className='font-semibold'>Título</Label>
        <p className='text-sm opacity-80'>{articleContent?.split('\n')[0]}</p>
        <Label className='font-semibold'>Descripción</Label>
        <p className='text-sm opacity-80'>{description}</p>
        <Label className='font-semibold'>
          Añade o cambia los temas/categorías (hasta 5), así los lectores sabrán de que trata tu
          historia.
        </Label>
        <SelectCategory />
        <div className='flex justify-start gap-x-2'>
          {categories?.map(category => (
            <Badge
              key={category}
              variant='secondary'
              className='space-x-5'
            >
              {category}{' '}
              <button
                onClick={() => {
                  removeCategory({ category })
                }}
                className='cursor-pointer'
              >
                <IconX className='size-4 text-red-600' />
              </button>
            </Badge>
          ))}
        </div>
        <DialogFooter>
          <Button disabled={title && description ? false : true}>Publicar ahora</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
