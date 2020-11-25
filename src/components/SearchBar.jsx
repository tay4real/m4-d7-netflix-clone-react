import React from "react"
import {
  Button,
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
        <Button variant="outline-danger">Search</Button>
      </Form>
    )
  }
}
export default SearchBar