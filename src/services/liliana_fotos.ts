import pb from '@/lib/pocketbase/client'

export interface LilianaFoto {
  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  liliana_fundo: string
}

export const getLilianaFotos = () => {
  return pb.collection('liliana_fotos').getFullList<LilianaFoto>({
    sort: '-created',
  })
}

export const getLilianaFoto = (id: string) => {
  return pb.collection('liliana_fotos').getOne<LilianaFoto>(id)
}

export const uploadLilianaFoto = (file: File) => {
  const formData = new FormData()
  formData.append('liliana_fundo', file)
  return pb.collection('liliana_fotos').create<LilianaFoto>(formData)
}

export const deleteLilianaFoto = (id: string) => {
  return pb.collection('liliana_fotos').delete(id)
}

export const getImageUrl = (record: LilianaFoto, filename: string) => {
  return pb.files.getURL(record, filename)
}
