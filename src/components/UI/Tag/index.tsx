import { Container } from './styles'

interface TagProps {
  text: string
}
const Tag = function ({ text }: TagProps) {
  return <Container>{text}</Container>
}
export default Tag
