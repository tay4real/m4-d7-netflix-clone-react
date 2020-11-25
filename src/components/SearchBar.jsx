import React from "react"
import {
 
  Form,
  FormControl,
} from "react-bootstrap"

class SearchBar extends React.Component {
  state = {}

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          onKeyDown={this.props.onKeyDown}
          onChange={this.props.onChange}
          className="mr-sm-2"
        />
       
      </Form>
    )
  }
}
export default SearchBar