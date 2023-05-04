import {Component} from 'react'

import {
  AppContainer,
  InputContainer,
  Heading,
  Label,
  Input,
  Select,
  GenerateButton,
  ImageContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    urlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
  }

  getUrl = event => {
    this.setState({urlInput: event.target.value})
  }

  getTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  getFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {urlInput, topTextInput, bottomTextInput, fontSizeInput} = this.state

    this.setState({
      url: urlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    const {
      urlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      url,
      topText,
      bottomText,
      fontSize,
    } = this.state

    return (
      <AppContainer>
        <InputContainer onSubmit={this.submitForm}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="url">Image Url</Label>
          <Input
            value={urlInput}
            onChange={this.getUrl}
            placeholder="Enter the Image Url"
            id="url"
            type="text"
          />
          <Label htmlFor="top-text">Top Text</Label>
          <Input
            value={topTextInput}
            onChange={this.getTopText}
            placeholder="Enter the Top Text"
            id="top-text"
            type="text"
          />
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <Input
            value={bottomTextInput}
            onChange={this.getBottomText}
            placeholder="Enter the Bottom Text"
            id="bottom-text"
            type="text"
          />
          <Label htmlFor="font-size">Font Size</Label>
          <Select
            value={fontSizeInput}
            onChange={this.getFontSize}
            id="font-size"
          >
            {fontSizesOptionsList.map(eachOption => (
              <option value={eachOption.displayText} key={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </Select>
          <GenerateButton type="submit">Generate</GenerateButton>
        </InputContainer>
        <ImageContainer data-testid="meme" url={url}>
          <Text size={fontSize}>{topText}</Text>
          <Text size={fontSize}>{bottomText}</Text>
        </ImageContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
