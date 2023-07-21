import datas from '../datas/PCs.json'

interface IProducts {
  type: string
  id: string
  img: string
  system: string
  cpu: string
  gpu: string
  disk: string
  memory: string
  originalPrice: number
  discountPrice: number
  affirmPrice: number
}

export const products: IProducts[] = datas
