import {ListItem, Paragraph} from './styledcomponents'

const Items = props => {
  const {wordDetails} = props
  const {word} = wordDetails

  return (
    <ListItem>
      <Paragraph>
        {word} : {word.length}
      </Paragraph>
    </ListItem>
  )
}

export default Items
